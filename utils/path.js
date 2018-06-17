const Path = require('path');
const proxy = require('./proxy');

const path = exports;

const cwd = (path = '') => Path.join(process.cwd(), path);

module.exports = proxy(Path, { cwd });
