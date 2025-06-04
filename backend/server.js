const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

const contactLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 contact form submissions per minute
    message: 'Too many contact form submissions, please wait a minute before trying again.'
});

app.use(limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Email configuration
const createTransporter = () => {
    // Gmail configuration (you can change this to other email providers)
    // Gmail configuration (you can change this to other email providers)
    console.log(`Email = `+  process.env.EMAIL_USER);
    console.log(`Password = `+  process.env.EMAIL_PASS);
    return nodemailer.createTransport({  // Fixed: createTransport instead of createTransporter
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS  // Your app password
        }
    });

    // Alternative SMTP configuration
    /*
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    */
};

// Validation middleware
const validateContactForm = [
    body('name')
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Name can only contain letters and spaces'),

    body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),

    body('message')
        .trim()
        .isLength({ min: 10, max: 1000 })
        .withMessage('Message must be between 10 and 1000 characters')
];

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'Employee Supplier API'
    });
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, validateContactForm, async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { name, email, message } = req.body;

        // Create transporter
        const transporter = createTransporter();

        // Verify transporter configuration
        // await transporter.verify();

        // Email to company
        const companyMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.COMPANY_EMAIL || process.env.EMAIL_USER,
            subject: `New Contact Form Submission - Employee Supplier Services`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Employee Supplier Services</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; display: inline-block; width: 80px;">Name:</strong>
              <span style="color: #333;">${name}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; display: inline-block; width: 80px;">Email:</strong>
              <span style="color: #333;">${email}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea; display: inline-block; width: 80px; vertical-align: top;">Message:</strong>
              <div style="margin-top: 5px; padding: 15px; background: white; border-left: 4px solid #667eea; border-radius: 5px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>IP Address:</strong> ${req.ip || 'Unknown'}</p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; font-size: 14px;">Employee Supplier Services - Professional Staffing Solutions</p>
          </div>
        </div>
      `,
            text: `
        New Contact Form Submission - Employee Supplier Services
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        Submitted: ${new Date().toLocaleString()}
        IP Address: ${req.ip || 'Unknown'}
      `
        };

        // Auto-reply email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting Employee Supplier Services',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Your Interest!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Employee Supplier Services</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to Employee Supplier Services. We have received your message and appreciate your interest in our professional staffing solutions.
            </p>
            
            <div style="background: white; padding: 20px; border-left: 4px solid #667eea; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #667eea; margin-top: 0;">What happens next?</h3>
              <ul style="color: #333; line-height: 1.6;">
                <li>Our team will review your message within 24 hours</li>
                <li>A staffing specialist will contact you to discuss your needs</li>
                <li>We'll provide tailored solutions for your business requirements</li>
              </ul>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to explore our services or contact us directly at:
            </p>
            
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 5px 0; color: #333;"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p style="margin: 5px 0; color: #333;"><strong>Email:</strong> info@employeesupplier.com</p>
              <p style="margin: 5px 0; color: #333;"><strong>Address:</strong> 123 Business Ave, Suite 100, New York, NY 10001</p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>The Employee Supplier Services Team</strong>
            </p>
          </div>
          
          <div style="background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; font-size: 14px;">Employee Supplier Services - Your Trusted Partner in Professional Staffing</p>
          </div>
        </div>
      `,
            text: `
        Dear ${name},
        
        Thank you for reaching out to Employee Supplier Services. We have received your message and appreciate your interest in our professional staffing solutions.
        
        What happens next?
        - Our team will review your message within 24 hours
        - A staffing specialist will contact you to discuss your needs
        - We'll provide tailored solutions for your business requirements
        
        In the meantime, feel free to contact us directly:
        Phone: +1 (555) 123-4567
        Email: info@employeesupplier.com
        Address: 123 Business Ave, Suite 100, New York, NY 10001
        
        Best regards,
        The Employee Supplier Services Team
      `
        };

        // Send emails
        await Promise.all([
            transporter.sendMail(companyMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        console.log(`New contact form submission from ${name} (${email}) at ${new Date().toISOString()}`);

        res.json({
            success: true,
            message: 'Thank you for your message. We will get back to you soon!'
        });

    } catch (error) {
        console.error('Contact form error:', error);

        res.status(500).json({
            success: false,
            message: 'Sorry, there was an error sending your message. Please try again later.'
        });
    }
});

// SEO and metadata endpoints
app.get('/api/sitemap.xml', (req, res) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${process.env.FRONTEND_URL || 'https://employeesupplier.com'}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${process.env.FRONTEND_URL || 'https://employeesupplier.com'}/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${process.env.FRONTEND_URL || 'https://employeesupplier.com'}/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${process.env.FRONTEND_URL || 'https://employeesupplier.com'}/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
});

app.get('/api/robots.txt', (req, res) => {
    const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${process.env.FRONTEND_URL || 'https://employeesupplier.com'}/api/sitemap.xml`;

    res.set('Content-Type', 'text/plain');
    res.send(robots);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});