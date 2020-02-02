'use strict';

const Hapi = require('@hapi/hapi');
const Schwifty = require('schwifty');
const routes = require('./core/routes');

require('dotenv').config();

const start = async () => {
    const serverOptions = {
        port: process.env.PORT,
        host: process.env.HOST
    };

    const server = Hapi.server(serverOptions);

    await server.register({
        plugin: Schwifty,
        options: {
            knex: {
                client: 'sqlite3',
                useNullAsDefault: true,
                connection: {
                    filename: process.env.DB_NAME
                }
            }
        }
    });
    await server.register([require('./core/models')]);
    await routes(server);
    await server.start();

    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
    console.error(err);
    process.exit(1);
});

start();
