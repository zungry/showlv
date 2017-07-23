module.exports = function (app) {
  // 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
  var user = require('../api/user'); // 获得express定义的app，app对象此时代表整个web应用
  var bodyParser = require('body-parser');
  // 给app配置bodyParser中间件
  // 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  // parse application/json
  app.use(bodyParser.json())
  app.use('/user', user);
};
