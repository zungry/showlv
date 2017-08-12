/**
 *  用户模块user.js
 * @authors Kang.Zhang
 * @date    2017-07-22 17:06:42
 */

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/UserSQL');
var pool = mysql.createPool(dbConfig.mysql);

// 响应一个JSON数据
var responseJSON = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '-200',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 处理get请求
router.get('/', function (req, res) {
  var param = req.query || req.params;
  var mobile = param.mobile;
  console.log(mobile);
  pool.getConnection(function (err, connection) {
    connection.query(userSQL.getUserById, [param.mobile, param.passwd], function (err, result, fields) {
      if (err) {
        console.log("Mysql err: " + err.message);
      }
      if (result == '') {
        results = {
          code: -1,
          msg: '手机号或密码错误'
        };
      } else {
        console.log(result)
        results = {
          code: 0,
          msg: result
        }
      }

      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, results);
      // 释放连接  
      connection.release();
    });
  });
});

// 处理POST请求
router.post('/', function (req, res) {
  console.log('接受到了post请求' + req.body.mobile);
  console.log(req.body);
  pool.getConnection(function (err, connection) {
    var username = req.body.username;
    var passwd = req.body.passwd;
    var mobile = req.body.mobile;

    connection.query(userSQL.insert, [username, passwd, mobile], function (err, result) {
      if (result) {
        result = {
          code: 200,
          msg: '增加成功'
        };
      }
      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);
      // 释放连接  
      connection.release();
    });
  });
});

module.exports = router;
