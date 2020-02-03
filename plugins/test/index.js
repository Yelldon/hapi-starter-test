exports.plugin = {
    name: 'test',
    version: '1.0.0',
    register: async function(server, options) {
        // Create a route for example
        server.route({
            method: 'GET',
            path: '/lol2',
            handler: function(request, h) {
                return 'hello, world';
            }
        });
    }
};
