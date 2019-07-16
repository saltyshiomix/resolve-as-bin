<p align="center">
  <a href="https://www.npmjs.com/package/resolve-as-bin"><img src="https://img.shields.io/npm/v/resolve-as-bin.svg"></a>
  <a href="https://www.npmjs.com/package/resolve-as-bin"><img src="https://img.shields.io/npm/dt/resolve-as-bin.svg"></a>
</p>
<p align="center">Resolve a local npm package as the absolute binary path</p>

## Install

```bash
$ npm install --save resolve-as-bin
```

## Usage

```js
import resolve from 'resolve-as-bin';

// npm installed package
console.log(resolve('rimraf')); // "/absolute/path/to/node_modules/.bin/rimraf(.cmd)"

// relative or absolute paths are supported
console.log(resolve('./some-binary')); // "/absolute/path/to/some-binary(.cmd)"
console.log(resolve('/absolute/path/another-binary')); // "/absolute/path/another-binary(.cmd)"
```
