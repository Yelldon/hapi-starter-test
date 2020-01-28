const PostController = require('./Controllers/PostController');

const apiVersion = `v1`
const basePath = `/api/${apiVersion}`

'use strict';

const routes = async (server) => {
    await server.route({
        method: 'GET',
        path: '/',
        handler(request, h) {
            return 'Hello World!';
        }
    })

    await server.route({
        method: 'GET',
        path: `${basePath}/post/{id}`,
        handler: (request) => PostController.get(request)
    })

    await server.route({
        method: 'POST',
        path: `${basePath}/post`,
        handler: (request) => PostController.post(request)
    })
};

module.exports = routes