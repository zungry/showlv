var UserSQL = {
  insert: 'INSERT INTO User(username,passwd) VALUES(?,?)',
  queryAll: 'SELECT * FROM User',
  getUserById: 'SELECT * FROM User WHERE uid = ? ',
};
module.exports = UserSQL;

