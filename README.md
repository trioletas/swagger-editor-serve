# swagger-editor-serve
Serve Swagger Editor

## Installing

```javascript
$ npm i swagger-editor-serve -S
```

## Using

### Default Configuration
```javascript
// starts the server and returns a promise that yields editor url object
const serve = require('swagger-editor-serve');
serve().then(editorUrl => console.log(editorUrl));
```

### Configuration Override
```javascript
const serve = require('swagger-editor-serve');
serve({
  editorPath: '../node_modules/swagger-editor', // path to source the editor distribution from
  serverUrl: {                                  // Node.js url object
    port: 9000                                  // if omitted, an arbirtrary available port will be picked up
  }
}).then((url) => console.log(url));
```


## Node Compatibility

Requires Node >= 4

## License

[MIT](LICENSE)
