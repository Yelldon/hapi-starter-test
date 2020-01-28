'use strict';

const Hapi = require('@hapi/hapi');
const Schwifty = require('schwifty');
const routes = require('./routes');

const start = async () => {
    const serverOptions = {
        port: 3000,
        host: 'localhost'
    }
    
    const server = Hapi.server(serverOptions)

    await server.register({
        plugin: Schwifty,
        options: {
            knex: {
                client: 'sqlite3',
                useNullAsDefault: true,
                connection: {
                    filename: 'hapi'
                }
            }
        }
    });
    await server.register([require('./models')]);
    await routes(server);
    await server.start();

    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

start();