/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://korpai.vercel.app',
  generateRobotsTxt: true, // ✅ Génère aussi un robots.txt automatiquement
  sitemapSize: 5000,
  outDir: './public', // Les fichiers seront disponibles publiquement
};
