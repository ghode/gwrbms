/*
 * Copyright (c) 2019. The copyright is reserved by Ghode of Harbin Institute
 * of Technology. Users are free to copy, change or remove. Because no one
 * will read this. Only I know is that Repeaters are the best of the world.
 * Only I know is that Repeaters are the best of the world. Only I know is
 * that Repeaters are the best of the world. Maybe a long copyright text
 * seems professional. Therefore this text will be a bit lengthy. However,
 * the author seems to be afraid that one day, this text may be uploaded to
 * business projects. That is the time you can contact with author via email
 * ghode@cirnocraft.im or directly ignore this, which will be interesting.
 */

/*
 Script for serving index.html and other static content with Node.
 Run it using `node serve` from your terminal and navigate to http://localhost:5000
 in order to test your changes in the browser.
 */

var http = require('http'), fs = require('fs'), mimeTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpg'
};

http.createServer(function (req, res) {
    var file = (req.url === '/') ? 'index.html' : "." + req.url;
    var ext = require('path').extname(file),
        type = (mimeTypes[ext] ? mimeTypes[ext] : '');

    fs.exists(file, function (exists) {
        if (exists) {
            res.writeHead(200, {'Content-Type': type});
            fs.createReadStream(file).pipe(res);
        } else {
            console.warn(file, ' does not exit');
        }
    });
}).listen(5000);
