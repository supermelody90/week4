var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(1185, function() {
    console.log('server listening on port 1185');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
    console.log(req.body);
    var content = JSON.parse(req.body);
    res.end('Edit Success!');
})











// var server = http.createServer(function (req, res) {
//     if (req.method.toLowerCase() == 'get') {
//         displayForm(res);
//     } else if (req.method.toLowerCase() == 'post') {
//         processAllFieldsOfTheForm(req, res);
//     }
// }).listen(1185);
//
// function displayForm(res) {
//     fs.readFile('index.html', function (err, data) {
//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//                 'Content-Length': data.length
//         });
//         res.write(data);
//         res.end();
//     });
// }
//
// function processAllFieldsOfTheForm(req, res) {
//     // var form = new formidable.IncomingForm();
//     //
//     // var content = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
//     //
//     // form.parse(req, function (err, fields, files) {
//     //     //Store the data from the fields in your data store.
//     //
//     //     //The data store could be a file or database or any other store based
//     //     //on your application.
//     //     res.writeHead(200, {
//     //         'content-type': 'text/plain'
//     //     });
//     //     res.write('received the data:\n\n');
//     //     res.end(util.inspect({
//     //         fields: content,
//     //         files: files
//     //     }));
//     // });
//     var postData = "";
//     var jsonData;
//
//     req.on('data', function(chunk) {
//         postData += chunk;
//     });
//
//     req.on('end', function() {
//         jsonData = JSON.parse(postData);
//     })
//
//     fs.writeFile('data.json', jsonData);
//
//     res.end(util.inspect({
//         postData: postData,
//         jsonData: jsonData
//     }));
// }
