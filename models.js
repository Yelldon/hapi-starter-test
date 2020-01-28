const glob = require('glob')

'use strict'

exports.plugin = {
    name: 'models',
    register: async (server, options) => {
        let models = glob.sync('./Models/*.js');
        models.forEach(model => {
            let modelLoad = require(model)
            modelLoad(server)
        })
    }
}