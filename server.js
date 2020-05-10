const express  = require('express'),
    bodyParser = require('body-parser'),
    routes     = require('./api/routes/apiRoutes'),
    firebase   = require('./database/firebase'),
    app        = express(),
    port       = process.env.PORT || 3000;

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
    
app
    .use(allowCrossDomain)
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .listen(port);
    
routes(app);
