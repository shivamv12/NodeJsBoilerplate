/** NPM Packages */
const slugify = require('slugify');
/** Custom Packages */
const randomGenerator = require('./randomGenerator');

/**
 * @param - Value: <string>, Options: <objcet> {length: <num>, prefix: <val> (optional)}
 * @desc - Generate random string of given length. If prefix passed in object,
 *         then add prefix to random code.
 */
const slugGenerator = async (value, options) => {
  let slugString = await slugify(value, {
    replacement: '-' /** default `-` */,
    remove: /[*+&~.()^'"!:;@]/g /** remove characters that match regex, defaults `undefined` */,
    lower: true /** convert to lower case, defaults `false` */,
    strict: false /** strip special characters except replacement, defaults `false` */,
  });

  if (options && options.length)
    slugString += '-' + (await randomGenerator(options));

  return slugString;
};

module.exports = slugGenerator;
