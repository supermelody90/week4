var express = require('express');
var path = require('path');
// var multer = require('multer');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// app.use(multer);

app.listen(1185, function() {
    console.log('server listening on port 1185');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    // res.write('hello');
});

app.post('/', function(req, res) {
    // console.log(req.body);
    var jsonData = req.body;
    delete jsonData.submit;
    var jsonString = JSON.stringify(jsonData);
    fs.writeFile('data.json', jsonString, function(err) {
        if(err) {
            return console.log(err);
        }
    });
    console.log(jsonData);
    res.end('Edit Success!');
})
