'use strict';

module.exports = function (app) {
    const apiController = require('../controller/apiController');

    app.route('/api/user')
        .get(apiController.getUserInfo)
        .post(apiController.postUserInfo)
        .put(apiController.putUserinfo);

    app.route('/api/user/all')
        .get(apiController.getAllUserInfo);

    app.route('/api/user/location')
        .get(apiController.getUserLocation)
        .post(apiController.postUserLocation)
        .put(apiController.putUserLocation);

    app.route('/api/user/location/all')
        .get(apiController.getAllLocations);


    app.route('api/device/all')
        .get(apiController.getAllDevices);

    app.route('/api/device')
        .get(apiController.getDevice)
        .post(apiController.postDevice)
        .put(apiController.putDevice);

    app.use(function (request, response) {
        response.status(404).send({ url: request.originalUrl + ' not found' })
    });
}