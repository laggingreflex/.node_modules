const fs = require('fs-extra');
const { cwd } = require('./path');
const proxy = require('./proxy');

const readFile = (path, opts = {}) => fs.readFile(path, { encoding: 'utf8', ...opts });

const read = path => readFile(cwd(path));

module.exports = proxy(fs, { readFile, read });
