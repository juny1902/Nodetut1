var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('<TITLE>Example</TITLE>');
    res.send('Hello World!');
    res.send('')
});

app.listen(3000, function() {
    console.log('Server On!');
})