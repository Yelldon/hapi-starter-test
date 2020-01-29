const glob = require('glob')

'use strict'

const controllerPath = glob.sync('Controllers/*');
controllerPath.forEach(controller => {
    module.exports = require(`../${controller}`)
})
