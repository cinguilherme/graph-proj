// Update with your config settings.
//const { conection } = require('./.env');

module.exports = {
  client: 'postgres',
  connection: {
    user: 'postgres',
    password: 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
