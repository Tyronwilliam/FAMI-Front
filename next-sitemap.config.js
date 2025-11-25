/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://famirestaurant.com', // ✅ ton domaine final
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 1.0,
  exclude: ['/404'], // tu peux ajouter d’autres pages à ignorer
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
}
