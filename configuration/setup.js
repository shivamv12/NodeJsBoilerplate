const config = {
  /** Development ENV Setup */
  dev: {
    server: {
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 8080,
      env: process.env.ENVIRONMENT || 'development',
    },
    dbLocal: {
      host: process.env.DB_LOCAL_HOST || 'localhost',
      port: process.env.DB_LOCAL_PORT || 27020,
      dbName: process.env.DB_LOCAL_NAME,
    },
    dbServer: {
      dbName: process.env.DB_NAME,
      dbUser: process.env.DB_USER,
      cluster: process.env.DB_CLUSTER,
      password: process.env.DB_PASSWORD,
    },
  },

  /** Production ENV Setup */
  prod: {
    server: {},
    dbLocal: {},
    dbServer: {},
  },
};

module.exports = config;
