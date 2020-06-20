const config = {
  /** Development ENV Setup */
  dev: {
    server: {
      PORT: process.env.PORT,
      ENV: process.env.ENVIRONMENT || 'development',
    },
    dbLocal: {},
    dbServer: {},
  },
};

module.exports = config;
