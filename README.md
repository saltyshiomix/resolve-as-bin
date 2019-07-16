<p align="center">
  <a href="https://www.npmjs.com/package/resolve-as-bin"><img src="https://img.shields.io/npm/v/resolve-as-bin.svg"></a>
  <a href="https://www.npmjs.com/package/resolve-as-bin"><img src="https://img.shields.io/npm/dt/resolve-as-bin.svg"></a>
</p>
<p align="center">Resolve a local npm package as the binary path</p>

## Install

```bash
$ npm install --save resolve-as-bin
```

## Usage

```js
import resolve from 'resolve-as-bin';

// npm installed package
console.log(resolve('rimraf')); // ./node_modules/.bin/rimraf(.cmd)

// relative or absolute paths are supported
console.log(resolve('./some-binary')); // /absolute/path/to/some-binary
console.log(resolve('/another-binary')); // /another-binary
```
