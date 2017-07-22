var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello Showlv');
});


var lawers = [
    {
        name: 'Chenglin.Wang', description: 'Great lawer', price: 20000
    },{
        name: 'Jiaozi.Wang', description: 'Great lawer', price: 20000
    }
]
app.get('/lawers', function(req, res) {
    res.json(lawers);
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Showlv server listening at http://%s:%s', host, port);
})