const express  = require('express'),
    bodyParser = require('body-parser'),
    routes     = require('./api/routes/apiRoutes'),
    firebase   = require('./database/firebase'),
    cors       = require('cors'),
    app        = express(),
    port       = process.env.PORT || 3300;

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
    
app
    .use(allowCrossDomain)
    .use(cors())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .listen(port);
    
routes(app);
