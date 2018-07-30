'use strict'

var path = require('path')
var spawn = require('cross-spawn')

function bin(name) {
  if (0 <= name.indexOf(path.sep)) {
    return path.isAbsolute(name) ? name : path.resolve(name)
  }
  return path.join(spawn.sync('npm', ['bin'], { cwd: process.cwd() }).stdout.toString().trim(), /^win/.test(process.platform) ? `${name}.cmd` : name)
}

module.exports = bin
module.exports.default = bin
