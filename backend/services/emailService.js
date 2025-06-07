const nodemailer = require('nodemailer');
const templateService = require('./templateService');

// Email configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
    }
});

// Initialize email transporter and preload templates
async function initializeEmailTransporter() {
    try {
        await transporter.verify();
        console.log("Email server is ready to take messages");

        // Preload email templates for better performance
        await templateService.preloadTemplates();
    } catch (error) {
        console.error("Email server verification failed:", error);
    }
}

// Send contact form emails
async function sendContactEmails(contactData, userIp) {
    const { name, email, message } = contactData;

    try {
        // Get processed templates
        const companyTemplate = await templateService.getCompanyNotificationTemplate({
            name, email, message, userIp
        });

        const userTemplate = await templateService.getUserAutoReplyTemplate({
            name
        });

        const companyMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.COMPANY_EMAIL || process.env.EMAIL_USER,
            subject: `New Contact Form Submission - ${process.env.COMPANY_NAME}`,
            html: companyTemplate.html,
            text: companyTemplate.text
        };

        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thank you for contacting ${process.env.COMPANY_NAME}`,
            html: userTemplate.html,
            text: userTemplate.text
        };

        // Send emails in background
        setImmediate(async () => {
            try {
                await Promise.all([
                    transporter.sendMail(companyMailOptions),
                    transporter.sendMail(userMailOptions)
                ]);
                console.log(`Emails sent successfully for ${name} (${email})`);
            } catch (error) {
                console.error('Background email sending failed:', error);
            }
        });
    } catch (error) {
        console.error('Error processing email templates:', error);
        throw error;
    }
}



module.exports = {
    transporter,
    initializeEmailTransporter,
    sendContactEmails
};