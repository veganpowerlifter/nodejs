const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/') // .all is a method for all requests
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

campsiteRouter.route('/:campsiteId') // we use colon since it's a single resource
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    req.params.campsiteId;
    res.end(`Will send the campsite with ${req.params.campsiteId} to you`);
})
.post((req, res) => {
    res.statusCode = 403; //405 in real life is right!
    res.end('PUT operation not supported on /campsites');
    })
.put((req, res) => {
    res.end(`Update the campsite ${req.params.campsiteId} with the data from the request body ${req.body}`);
})
// we get dynamic data from params
.delete((req, res) => {
    res.end(`Deleting the campsite with ${req.params.campsiteId}`);
});

// TODO: Implement the /campsites/:campsiteId routes

module.exports = campsiteRouter;