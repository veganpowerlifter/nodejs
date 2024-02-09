const express = require('express');

const campsiteRouter = require('./routes/campsiteRouter');
// TODO: Import the partnerRouter, similar to the campsiteRouter above
// TODO: Import the promotionRouter, similar to the campsiteRouter above

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.json());

app.use('/campsites', campsiteRouter);
// TODO: Use the partnerRouter at /partners, similar to the campsiteRouter above at /campsites
// TODO: Use the promotionRouter at /promotions, similar to the campsiteRouter above at /campsites


app.use(express.static(__dirname + '/public'));

app.use((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});