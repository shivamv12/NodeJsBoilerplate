/** NPM Packages */
const {Queue} = require('bullmq');
const IOredis = require('ioredis');

/** Redis Connection */
const conn = new IOredis(process.env.REDIS_PORT);

const bullmq = async () => {
  const queue = new Queue('default', {connection: conn});
  return queue;
};

module.exports = bullmq;
