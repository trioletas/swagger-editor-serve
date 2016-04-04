'use strict';

const Promise = require('bluebird');

const path = require('path');
const http = Promise.promisifyAll(require('http'));

const connect = require('connect');
const serveStatic = require('serve-static');

const portFinder = Promise.promisifyAll(require('portfinder'));

const main = Promise.coroutine(function* go(config) {
  const defaultConfig = {
    editorPath: '../../swagger-editor',
  };
  Object.assign(defaultConfig, config);

  const app = connect();

  app.use('/', serveStatic(path.join(__dirname, defaultConfig.editorPath)));

  const port = yield portFinder.getPortAsync();
  const editorUrl = {
    protocol: 'http',
    hostname: '127.0.0.1',
    port,
  };

  const server = http.createServer(app);
  yield server.listenAsync(editorUrl.port, editorUrl.host);

  return editorUrl;
});

module.exports = main;
