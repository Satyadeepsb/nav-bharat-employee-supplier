const rateLimit = require('express-rate-limit');

// General rate limiting
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Contact form specific rate limiting
const contactLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 contact form submissions per minute
    message: 'Too many contact form submissions, please wait a minute before trying again.'
});

module.exports = {
    generalLimiter,
    contactLimiter
};