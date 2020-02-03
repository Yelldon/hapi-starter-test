const glob = require('glob');

('use strict');

const plugins = [];

const pluginPaths = glob.sync('plugins/*');
pluginPaths.forEach(plugin => {
    plugins.push(require(`../${plugin}`));
});

module.exports = plugins;
