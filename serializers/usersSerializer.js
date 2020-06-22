/**
 * @desc - Serialize Users
 * @returnType - array of objects
 * @fields - uid, name, slug, email, createdAt
 */
exports.serializeUsers = async (users) => {
  let usersArr = [];
  users.map((user) => {
    let userObj = {};
    userObj.uid = user.uid;
    userObj.name = user.name;
    userObj.slug = user.slug;
    userObj.email = user.email;
    userObj.createdAt = user.createdAt;
    usersArr.push(userObj);
  });
  return usersArr;
};

/**
 * @desc - Serialize single user data
 * @returnType - object
 * @fields - uid, name, slug, email, createdAt
 */
exports.serializeUser = async (user) => {
  return {
    uid: user.uid,
    name: user.name,
    slug: user.slug,
    email: user.email,
    createdAt: user.createdAt,
  };
};
