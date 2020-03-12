'use strict';

module.exports = function (app) {
    var apiController = require('../controller/apiController');

    app.route('/api/user')
        .get(apiController.getUserInfo)
        .post(apiController.postUserInfo);

    app.route('/api/user/location')
        .get(apiController.getUserLocation)
        .post(apiController.postUserLocation);

    app.route('api/user/device')
        .get(apiController.getUserDevice)
        .post(apiController.postUserDevvice);

    app.use(function (request, response) {
        response.status(404).send({ url: request.originalUrl + ' not found' })
    });
}