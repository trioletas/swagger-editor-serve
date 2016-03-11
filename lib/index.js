'use strict';

const Promise = require('bluebird');

const path = require('path');
const http = Promise.promisifyAll(require('http'));

const connect = require('connect');
const serveStatic = require('serve-static');

const getPort = require('get-port');

const main = Promise.coroutine(function* go() {
  const app = connect();

  app.use('/', serveStatic(path.join(__dirname, '../../swagger-editor')));

  const port = yield getPort();

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
