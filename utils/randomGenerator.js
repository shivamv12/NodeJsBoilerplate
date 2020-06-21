/**
 * @param - Object: {length: <num>, prefix: <val> (optional)}
 * @desc - Generate random string of given length. If prefix passed in object,
 *         then add prefix to random code.
 */
const randomGenerator = async (payload) => {
  let random = Math.round(
    Math.pow(36, payload.length + 1) -
      Math.random() * Math.pow(36, payload.length)
  )
    .toString(36)
    .slice(1);

  if (payload.prefix) random = payload.prefix + random;

  return random;
};

module.exports = randomGenerator;
