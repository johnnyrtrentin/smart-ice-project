const express  = require('express'),
    bodyParser = require('body-parser'),
    routes     = require('./api/routes/apiRoutes'),
    firebase   = require('./database/firebase'),
    cors       = require('cors'),
    app        = express(),
    port       = process.env.PORT || 3300;
    
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    
routes(app);

app.listen(port);
