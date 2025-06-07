const fs = require('fs').promises;
const path = require('path');

class TemplateService {
    constructor() {
        this.templateCache = new Map();
        this.templateDir = path.join(__dirname, '..', 'templates', 'emails');
    }

    /**
     * Load and cache email template
     * @param {string} templateName - Name of the template file (without extension)
     * @param {string} type - 'html' or 'txt'
     * @returns {Promise<string>} Template content
     */
    async loadTemplate(templateName, type = 'html') {
        const cacheKey = `${templateName}.${type}`;

        // Return cached template if available
        if (this.templateCache.has(cacheKey)) {
            return this.templateCache.get(cacheKey);
        }

        try {
            const templatePath = path.join(this.templateDir, `${templateName}.${type}`);
            const templateContent = await fs.readFile(templatePath, 'utf8');

            // Cache the template
            this.templateCache.set(cacheKey, templateContent);

            return templateContent;
        } catch (error) {
            console.error(`Error loading template ${templateName}.${type}:`, error);
            throw new Error(`Template ${templateName}.${type} not found`);
        }
    }

    /**
     * Process template with variables
     * @param {string} templateContent - Template content with placeholders
     * @param {object} variables - Variables to replace in template
     * @returns {string} Processed template
     */
    processTemplate(templateContent, variables) {
        let processedTemplate = templateContent;

        // Replace all {{variable}} placeholders
        Object.keys(variables).forEach(key => {
            const placeholder = new RegExp(`{{${key}}}`, 'g');
            processedTemplate = processedTemplate.replace(placeholder, variables[key] || '');
        });

        return processedTemplate;
    }

    /**
     * Get processed company notification email template
     * @param {object} data - Email data
     * @returns {Promise<object>} HTML and text templates
     */
    async getCompanyNotificationTemplate(data) {
        const { name, email, message, userIp } = data;

        const variables = {
            name,
            email,
            message: message.replace(/\n/g, '<br>'), // Convert newlines to HTML breaks for HTML template
            submittedAt: new Date().toLocaleString(),
            userIp: userIp || 'Unknown',
            companyName: process.env.COMPANY_NAME || 'Navbharat Employee Suppliers'
        };

        const [htmlTemplate, textTemplate] = await Promise.all([
            this.loadTemplate('companyNotification', 'html'),
            this.loadTemplate('companyNotification', 'txt')
        ]);

        return {
            html: this.processTemplate(htmlTemplate, variables),
            text: this.processTemplate(textTemplate, { ...variables, message }) // Use original message for text
        };
    }

    /**
     * Get processed user auto-reply email template
     * @param {object} data - Email data
     * @returns {Promise<object>} HTML and text templates
     */
    async getUserAutoReplyTemplate(data) {
        const { name } = data;

        const variables = {
            name,
            companyName: process.env.COMPANY_NAME || 'Navbharat Employee Suppliers',
            companyPhone: process.env.COMPANY_PHONE || '+91 9021137437',
            companyEmail: process.env.COMPANY_EMAIL || 'info@navbharatemployeesuppliers.com',
            companyAddress: process.env.COMPANY_ADDRESS || 'PRAVIRA SANKUL FLOOR NO. FF-3, KADAMWADI, KOLHAPUR (MUNICIPAL CORPORATION.), KARVIR, KOLHAPUR 416003'
        };

        const [htmlTemplate, textTemplate] = await Promise.all([
            this.loadTemplate('userAutoReply', 'html'),
            this.loadTemplate('userAutoReply', 'txt')
        ]);

        return {
            html: this.processTemplate(htmlTemplate, variables),
            text: this.processTemplate(textTemplate, variables)
        };
    }

    /**
     * Clear template cache (useful for development)
     */
    clearCache() {
        this.templateCache.clear();
        console.log('Template cache cleared');
    }

    /**
     * Preload commonly used templates
     */
    async preloadTemplates() {
        try {
            await Promise.all([
                this.loadTemplate('companyNotification', 'html'),
                this.loadTemplate('companyNotification', 'txt'),
                this.loadTemplate('userAutoReply', 'html'),
                this.loadTemplate('userAutoReply', 'txt')
            ]);
            console.log('Email templates preloaded successfully');
        } catch (error) {
            console.error('Error preloading templates:', error);
        }
    }
}

// Export singleton instance
module.exports = new TemplateService();