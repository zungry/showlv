var express = require('express');
var app = express();
var morgan = require('morgan');
var cors=require('cors');

app.use(cors({origin:true,credentials: true}));
app.use(morgan('dev')); // Log every request to console

app.post('/login/app_mobile', function (req, res) {
    var param = req.query || req.params;
    console.log(param);
    res.json({
      username: 'kang',
      code: '200',
      msg: 'success'
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Showlv server listening at http://%s:%s', host, port);
})
