const express = require('express');
const router = express.Router();

const { contactLimiter } = require('../middleware/rateLimiter');
const { validateContactForm, handleValidationErrors } = require('../middleware/validation');
const { sendContactEmails } = require('../services/emailService');

// Contact form endpoint
router.post('/contact', contactLimiter, validateContactForm, handleValidationErrors, async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Send emails (handled in background)
        await sendContactEmails({ name, email, message }, req.ip);

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

module.exports = router;