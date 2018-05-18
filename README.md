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
const serve = require('./index');
serve()
  .then(c => console.log(c));
```

### Configuration Override

```javascript
const serve = require('./index');
serve({
  editorPath: '../node_modules/swagger-editor-dist',
  serverUrl: {
    port: 9000
  }
}).then(c => console.log(c));
```

## Node Compatibility

Requires Node >= 8

## License

[MIT](LICENSE)
