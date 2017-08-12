var express = require('express');
var app = express();
var morgan = require('morgan');
var router = express.Router(); 
app.use(morgan('dev')); // Log every request to console

var mysql = require('mysql');
var dbConfig = require('./db/DBConfig');
var userSQL = require('./db/UserSQL');
var pool = mysql.createPool(dbConfig.mysql);

// 设置/routes/index文件为总的路由控制文件
// 在routes/index文件中再进行统一的路由分发，这样防止app.js中代码过于臃肿



//该路由使用的中间件

// router.route('tests').post(function (req, res) {
//   console.log('接受到了post请求' + req.body.mobile);
//   console.log(req.body.passwd);
//   res.send({
//     'regist': {
//       title: req.body.username
//     }
//   })
// });

// router.route('tests').get(function(req, res){
//     console.log("send");
//     res.send({
//         'code': 200
//     })g
// })

var routes = require('./routes/index');
routes(app);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Showlv server listening at http://%s:%s', host, port);
})
