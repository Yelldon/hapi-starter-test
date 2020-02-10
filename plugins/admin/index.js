exports.plugin = {
    name: 'admin',
    version: '1.0.0',
    register: async (server, options) => {
        // Create a route for example
        server.route({
            method: 'GET',
            path: '/lol',
            handler: function(request, h) {
                return 'hello, world';
            }
        });
    }
};
