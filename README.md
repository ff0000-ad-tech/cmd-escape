## Cmd Escape

Converts a list of unix params into a string that can be executed in Windows cmd.exe

#### What it does

Items that start with `-` or `--`:
 - no change 

Other items:
 - have their `"` characters escaped with backslashes
 - are quoted with unescaped `"`

Then all items are joined with a ` ` space character.

## Install
```bash
npm install cmd-escape --save
```

## Usage
```javascript
const cmdEscape = require('cmd-escape');

const command = 'npx webpack';
const args = [
	'--config',
	'webpack.config.js'
	'--env'
	'{"deploy":{"source":{"size":"300x250","index":"index.html"},"output":{"debug":false,"context":"./3-traffic"},"profile":{"name":"default","adEnvironment":{"id":"default","runPath":"","adPath":""}}},"watch":{"api":"http://10.0.7.126:5200/api","key":"/default/300x250/index.html","watch":{"start":"/watch-start","stop":"/watch-stop","complete":"/watch-complete"},"processing":{"start":"/processing-start","stop":"/processing-stop"},"error":{"dispatch":"/error-dispatch","reset":"/error-reset"}}}'
	'--colors'
];
console.log(command, cmdEscape(args));
// => npx webpack --config "webpack.config.js" --env "{\"deploy\":{\"source\":{\"size\":\"300x250\",\"index\":\"index.html\"}}}" --colors
```




