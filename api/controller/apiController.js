'use strict';

const firestore = require('../../database/firebase');
const db = firestore.database();

exports.getAllUserInfo = function (request, response) {
    let allUsers = [];

    db.collection('users')
        .get()
        .then(document => {
            if (document.empty) {
                response.status(404).json({ error: 'No matching collection.' });
                return;
            }

            document.forEach(user =>
                allUsers.push(user.data())
            );
            response.status(200).json(allUsers);
        })
        .catch(err => {
            response.status(500).json({ error: err });
            console.error(`Error to get all user info: ${err}`);
        });
};

exports.getUserInfo = function (request, response) {
    const paramName = request.query.name;

    db.collection('users')
        .where('name', '==', paramName)
        .get()
        .then((document) => {
            if (document.empty) {
                response.status(404).json({ error: 'No matching user information.' });
                return;
            }
            document.forEach(doc =>
                response.status(200).json(doc.data())
            );
        })
        .catch(err => {
            response.status(500).json({ error: err });
            console.error(`Error to get user info: ${err}`);
        });
};

exports.putUserinfo = function (request, response) {
    let dbUser = [];
    const req = request.body;
    const user = request.query.name;

    db.collection('users')
        .where('name', '==', user)
        .get()
        .then(document => {
            if (document.empty) {
                response.status(404).json({ error: 'No matching user information.' });
                return;
            }

            dbUser = document.forEach(user =>
                dbUser.push(user.data())
            );

        }).catch(err => {
            response.status(500).json({ error: err })
            console.error(`Error to get user in database: ${err}`);
        });

    if (dbUser) {
        db.collection('users')
            .doc(user)
            .update(req)
            .then(() =>
                response.status(200).json(req))
            .catch(err => {
                response.status(500).json({ error: err })
                console.error(`Error to put user data in database: ${err}`);
            });
    }
};

exports.postUserInfo = function (request, response) {
    const user = request.body;
    const personName = user.hasOwnProperty('name')
        ? user.name
        : undefined;

    db.collection('users')
        .doc(personName)
        .set(user)
        .then(() =>
            response.status(200).json(user))
        .catch(err => {
            response.status(500).json({ error: err });
            console.err(`Error to put user data in database: ${err}`);
        });
};

exports.getAllLocations = function (request, response) {
    let allLocations = [];

    db.collection('location')
        .get()
        .then(document => {
            if (document.empty) {
                response.status(404).json({ error: 'No matching collection.' });
                return;
            }

            document.forEach(location =>
                allLocations.push(location.data())
            );
            response.status(200).json(allLocations);
        })
        .catch(err => {
            response.status(500).json({ error: err });
            console.error(`Error to get all location info: ${err}`);
        });
};

exports.getUserLocation = function (request, response) {
    const userName = request.query.name;

    db.collection('location')
        .where('name', '==', userName)
        .get()
        .then((document) => {
            if (document.empty) {
                response.status(404).json({ error: 'No matching user location.' });
                return;
            }

            document.forEach(user =>
                response.status(200).json(user.data())
            );
        })
        .catch(err => {
            response.status(500).json({ error: err });
            console.error(`Error to get user location data in database: ${err}`);
        });
};

exports.putUserLocation = function (request, response) {
    let dbUser = [];

    const req = request.body;
    const user = request.query.name;

    db.collection('location')
        .where('name', '==', user)
        .get()
        .then(document => {
            if (document.empty) {
                response.status(404).json({ error: 'No matching user information.' });
                return;
            }

            dbUser = document.forEach(user =>
                dbUser.push(user.data())
            );

        }).catch(err => {
            response.status(500).json({ error: err })
            console.error(`Error to get user in database: ${err}`);
        });

    if (dbUser) {
        db.collection('location')
            .doc(user)
            .update(req)
            .then(() =>
                response.status(200).json(req))
            .catch(err => {
                response.status(500).json({ error: err })
                console.error(`Error to put user data in database: ${err}`);
            });
    }
};

exports.postUserLocation = function (request, response) {
    const location = request.body;
    const userName = location.hasOwnProperty('name')
        ? location.name
        : undefined;

    db.collection('location')
        .doc(userName)
        .set(location)
        .then(() =>
            response.status(200).json(location))
        .catch(err => {
            response.status(500).json({ error: err });
            console.error(`Error to put user location data in database: ${err}`);
        });
};

exports.getDevice = function (request, response) {
    const roomDevice = request.query.classroom;

    db.collection('devices')
        .where('classroom', '==', roomDevice)
        .get()
        .then((document) => {
            if (document.empty) {
                response.status(404).json({ error: 'No matching user Devices.' });
                return;
            }

            document.forEach(device =>
                response.status(200).json(device.data())
            );
        })
        .catch(err => {
            response.status(500).json({ error: err });
            console.error(`Error to get devices data in database: ${err}`);
        });
};

exports.postDevice = function (request, response) {
    const device = request.body;
    const deviceNumber = device.hasOwnProperty('classroom')
        ? device.classroom
        : undefined;

    db.collection('devices')
        .doc(deviceNumber)
        .set(device)
        .then(() =>
            response.status(200).json(device))
        .catch(err => {
            response.status(500).json({ error: err });
            console.error(`Error to put device data in database: ${err}`);
        });
};

exports.putDevice = function (request, response) {
    let deviceDB = [];

    const req = request.body;
    const device = request.query.classroom;

    db.collection('devices')
        .where('classroom', '==', device)
        .get()
        .then(document => {
            if (document.empty) {
                response.status(404).json({ error: 'No matching device information.' });
                return;
            }

            deviceDB = document.forEach(device =>
                deviceDB.push(device.data())
            );

        }).catch(err => {
            response.status(500).json({ error: err })
            console.error(`Error to get user in database: ${err}`);
        });

    if (deviceDB) {
        db.collection('devices')
            .doc(device)
            .update(req)
            .then(() =>
                response.status(200).json(req))
            .catch(err => {
                response.status(500).json({ error: err })
                console.error(`Error to put device data in database: ${err}`);
            });
    }
};