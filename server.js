const strapi = require('@strapi/strapi');

strapi({ 
  dir: process.cwd(), // Set the working directory (optional)
  autoReload: true,  // Enable auto-reloading in development mode
  serveAdminPanel: true // Serve the admin panel in development mode
}).start();