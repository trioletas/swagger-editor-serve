# swagger-editor-serve
Serve Swagger Editor

## Installing

`javascript
$ npm i swagger-editor-serve -S
`

## Using

```javascript
const serve = require('swagger-editor-serve'); // starts the server and returns a promise that yields editor url object
serve().then(editorUrl => console.log(editorUrl));
```

## Node Compatibility

Requires Node >= 4

## License

[MIT](LICENSE)
