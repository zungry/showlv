var UserSQL = {
  insert: 'INSERT INTO user(username,passwd,mobile) VALUES(?,?,?)',
  queryAll: 'SELECT * FROM user',
  getUserById: 'SELECT * FROM user WHERE mobile = ? AND passwd = ? ',
};
module.exports = UserSQL;

