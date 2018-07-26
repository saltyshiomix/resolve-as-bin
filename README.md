<a href="https://www.npmjs.com/package/resolve-as-bin"><img src="https://img.shields.io/npm/v/resolve-as-bin.svg"></a>
<a href="https://www.npmjs.com/package/resolve-as-bin"><img src="https://img.shields.io/npm/dt/resolve-as-bin.svg"></a>

Resolve a local npm package as binary path

## Install

```bash
$ npm install --save resolve-as-bin
```

## Usage

```js
import resolve from 'resolve-as-bin'

var binPath = resolve('rimraf')
console.log(binPath) // ./node_modules/.bin/rimraf(.cmd)

// you can execute by `child_process`
var spawnSync = require('child_process').spawnSync

// rimraf dist node_modules
spawnSync(binPath, ['dist', 'node_modules'])
```
