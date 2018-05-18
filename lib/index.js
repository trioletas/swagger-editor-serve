const path = require('path');
const http = require('http');
const connect = require('connect');
const serveStatic = require('serve-static');
const portFinder = require('portfinder');

const defaultConfig = {
  editorPath: '../../swagger-editor-dist',
  serverUrl: {
    protocol: 'http',
    hostname: '127.0.0.1',
  },
};

const serve = async (userProvidedConfig) => {
  const config = { ...defaultConfig, ...userProvidedConfig };
  if (!config.serverUrl.port) {
    config.serverUrl.port = await portFinder.getPortPromise();
  }

  const app = connect();
  app.use('/', serveStatic(path.join(__dirname, config.editorPath)));

  const server = http.createServer(app);

  server.listen(config.serverUrl.port, config.serverUrl.host);

  return config;
};

module.exports = serve;
