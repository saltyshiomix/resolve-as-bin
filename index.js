'use strict'

var join = require('path').join
var spawnSync = require('child_process').spawnSync
var binPath = spawnSync('npm', ['bin'], { cwd: process.cwd() }).stdout.toString().trim()
var isWin = /^win/.test(process.platform)

function bin(name) {
  return join(binPath, isWin ? `${name}.cmd` : name)
}

module.exports = bin
module.exports.default = bin
