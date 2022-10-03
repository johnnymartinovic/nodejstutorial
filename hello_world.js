const express = require('express');
const app = express();

let numberOfRequests = 0

app.get('/', function (req, res) {
    numberOfRequests += 1
    res.send(`Number of request = ${numberOfRequests}`);
});

const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("App listening at http://%s:%s", host, port)
});