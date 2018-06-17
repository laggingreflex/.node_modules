
const files = require('fs').readdirSync(__dirname);
for (const file of files) {
  if (file === 'index.js') continue;
  const moduleName = (file.replace(/(\.[\w]+?$)/, ''));
  const module = require('./' + file);
  exports[moduleName] = module;
}

