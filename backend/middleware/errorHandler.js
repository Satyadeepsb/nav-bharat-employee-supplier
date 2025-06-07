// Global error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
};

// 404 handler
const notFoundHandler = (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
};

module.exports = {
    errorHandler,
    notFoundHandler
};