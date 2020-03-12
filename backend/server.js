var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./api/routes/apiRoutes'),
    app = express(),
    port = process.env.PORT || 3000;
    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    
routes(app);

app.listen(port);
