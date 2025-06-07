const express = require('express');
const router = express.Router();

// Sitemap endpoint
router.get('/sitemap.xml', (req, res) => {
    const frontendUrl = process.env.FRONTEND_URL || 'https://employeesupplier.com';
    const currentDate = new Date().toISOString().split('T')[0];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${frontendUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${frontendUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${frontendUrl}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${frontendUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
});

// Robots.txt endpoint
router.get('/robots.txt', (req, res) => {
    const frontendUrl = process.env.FRONTEND_URL || 'https://employeesupplier.com';
    
    const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${frontendUrl}/api/sitemap.xml`;

    res.set('Content-Type', 'text/plain');
    res.send(robots);
});

module.exports = router;