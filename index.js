'use strict'

var path = require('path')
var spawnSync = require('child_process').spawnSync
var binPath = spawnSync('npm', ['bin'], { cwd: process.cwd() }).stdout.toString().trim()
var isWin = /^win/.test(process.platform)

function bin(name) {
  if (0 <= name.indexOf(path.sep)) {
    return path.isAbsolute(name) ? name : path.resolve(name)
  }
  return path.join(binPath, isWin ? `${name}.cmd` : name)
}

module.exports = bin
module.exports.default = bin
