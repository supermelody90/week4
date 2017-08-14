var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

var util = require('util');
var expressValidator = require('express-validator');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressValidator());

app.listen(8080, function() {
    // var reqPath = url.parse(req.url).pathname;
    console.log('server listening on port 8080');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.post('/', function(req, res) {
    var jsonData = req.body;
    //Validation;
    req.checkBody('postparam', 'Invalid postparam').notEmpty().isInt();
    req.checkParams('urlparam', 'Invalid urlparam').isAlpha();
    req.checkQuery('getparam', 'Invalid getparam').isInt();
    // req.checkBody('title', 'invalideTitle').notEmpty().isAlpha();
    // req.checkBody('releaseDate', 'invalideReleaseDate').notEmpty().isInt();
    // req.checkBody('duration', 'invalideDuration').notEmpty().isInt();
    // req.checkBody('genre', 'invalideGenre').notEmpty().isAlpha();
    // req.checkBody('synopsis', 'invalideSynopsis').notEmpty().isAlpha();

    req.sanitizeBody('postparam').toBoolean();
    req.sanitizeParams('urlparam').toBoolean();
    req.sanitizeQuery('getparam').toBoolean();

    req.sanitize('postparam').toBoolean();

    req.getValidationResult().then(function(result) {
        if(!result.isEmpty()) {
            res.status(400).send('There are validation errors:' + util.inspect(result.array()));
            return;
        }
        res.json({
            urlparam: req.params.urlparam,
            getparam: req.query.getparam,
            postparam: req.body.postparam
        });
    })

    delete jsonData.submit;
    if(!jsonData.title || !jsonData.title.isAlpha()) {
        res.end('invalidTitle');
        return;
    }else if (!jsonData.releaseDate || !jsonData.releaseDate.isAlpha()) {
        res.end('invalideReleaseDate');
        return;
    }else if (!jsonData.duration || !jsonData.duration.isInt()) {
        res.end('invalideDuration');
        return;
    }else if (!jsonData.genre || !jsonData.genre.isAlpha()) {
        res.end('invalideGenre');
        return;
    }else if (!jsonData.synopsis || !jsonData.synopsis.isAlpha()) {
        res.end('invalideSynopsis');
        return;
    }

    var jsonString = JSON.stringify(jsonData);
    fs.writeFile('data.json', jsonString, function(err) {
        if(err) {
            return console.log(err);
        }
    });
    console.log(jsonData);
    res.end(jsonString);
})
