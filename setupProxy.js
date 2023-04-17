const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://35.180.67.64:5000', // Your backend server URL
      changeOrigin: true,
    })
  );
};