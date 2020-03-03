const db = require('./models/db');
const express = require('express');

var app = express();
var qs = require('querystring');

var http = require('http');
var util = require('util');
console.log('here');
http.createServer(function (req, res) {
    var jsonString = '';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.on('data', function (data) {
        console.log('GOT DATA!');
        jsonString += data;
        console.log(jsonString.split('&'))
        console.log(jsonString.split('&')[3])
    });
    res.end('callback(\'{\"msg\": \"OK\"}\')');

}).listen(8080);
console.log('Server running on port 8080');