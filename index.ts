import {
  sep,
  isAbsolute,
  resolve,
} from 'path';
import { sync as spawnSync } from 'cross-spawn';

const bin = (nameOrPath: string) => {
  if (0 <= nameOrPath.indexOf(sep)) {
    return isAbsolute(nameOrPath) ? nameOrPath : resolve(nameOrPath);
  }
  const binDir: string = spawnSync('npm', ['bin'], { cwd: process.cwd() }).stdout.toString().trim();
  return resolve(binDir, /^win/.test(process.platform) ? `${nameOrPath}.cmd` : nameOrPath);
}

// require support
module.exports = bin;

export default bin;
