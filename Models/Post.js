const Joi = require('@hapi/joi');
const Schwifty = require('schwifty');

const Post = async (server) => {

    const tableName = 'posts'

    await server.schwifty(
        class Post extends Schwifty.Model {
            static get tableName() {

                return tableName;
            }

            static get joiSchema() {

                return Joi.object({
                    id: Joi.number(),
                    title: Joi.string(),
                    text: Joi.string(),
                });
            }

            static createNotFoundError(queryContext) {
                return new this.NotFoundError();
            }
        }
    );

    const knex = server.knex();

    await knex.schema.hasTable(tableName).then(async exists => {
        if (!exists) {
            await knex.schema.createTable(tableName, table => {
                table.increments('id').primary();
                table.string('title');
                table.string('text');
            })
            .then(() => console.log(`Successfully created ${tableName} table`))
            .catch(e => console.error(`Error when trying to create ${tableName} table`, e));
        }
    });

}

module.exports = Post