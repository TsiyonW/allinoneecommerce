// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password:'tsiyon',
      database:'allinone'
    },
    migrations:{
      directory: __dirname + '/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: 'postgres://jbaajoigvelsvh:ed528fe4a50a91e246c2f78c082cb92dfaa7e3422f58a73e3bbf590809e140e5@ec2-3-223-21-106.compute-1.amazonaws.com:5432/dbeu7afpjv78rr',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://jbaajoigvelsvh:ed528fe4a50a91e246c2f78c082cb92dfaa7e3422f58a73e3bbf590809e140e5@ec2-3-223-21-106.compute-1.amazonaws.com:5432/dbeu7afpjv78rr',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
