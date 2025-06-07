const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const { generalLimiter } = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');
const contactRoutes = require('./routes/contact');
const seoRoutes = require('./routes/seo');
const healthRoutes = require('./routes/health');
const { initializeEmailTransporter } = require('./services/emailService');

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// CORS configuration
const corsOptions1 = {
    origin: true, // Allow all origins (ONLY FOR TESTING)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}


const allowedOrigins = [
    'https://navbharatemployeesuppliers.com', // Replace with your actual frontend domain
    'https://www.navbharatemployeesuppliers.com', // Add www if applicable
    // Add any other domains that need to access your API
    'http://localhost:3000',
];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error('Not allowed by CORS')); // Block the request
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 200
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
console.log(allowedOrigins)

// Rate limiting
app.use(generalLimiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Initialize email transporter on startup
initializeEmailTransporter();

// Routes
app.use('/api', healthRoutes);
app.use('/api', contactRoutes);
app.use('/api', seoRoutes);

// Error handling middleware
app.use(errorHandler.errorHandler);
app.use(errorHandler.notFoundHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});

module.exports = app;