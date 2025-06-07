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
const corsOptions = {
    origin: [ process.env.FRONTEND_URL || 'http://localhost:3000',
        'https://navbharatemployeesuppliers.com',
        'https://www.navbharatemployeesuppliers.com'],
    credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

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