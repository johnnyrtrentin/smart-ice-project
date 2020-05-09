const express  = require('express'),
    bodyParser = require('body-parser'),
    routes     = require('./api/routes/apiRoutes'),
    firebase   = require('./database/firebase'),
    app        = express(),
    port       = process.env.PORT || 3000;
    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next();
});
    
routes(app);

app.listen(port);
