const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    fs.readFile('./employees.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        res.send(data);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});