'use strict';

const firestore = require('../../database/firebase');
const db = firestore.database();

exports.getAllUserInfo = function (request, response) {
    let allUsers = [];

    db.collection('users')
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                response.status(404).json({ error: 'No matching collection.' });
                return;
            }

            snapshot.forEach(user =>
                allUsers.push(user.data())
            );
            response.status(200).json(allUsers);
        })
        .catch(err => {
            response.status(500).json({ error: 'Something wrong.' });
            console.error(`Error to get all user info: ${err}`);
        });
};

exports.getUserInfo = function (request, response) {
    const paramName = request.query.name;

    db.collection('users')
        .where('name', '==', paramName)
        .get()
        .then((snapshot) => {
            if (snapshot.empty) {
                response.status(404).json({ error: 'No matching user information.' });
                return;
            }
            snapshot.forEach(doc =>
                response.status(200).json(doc.data())
            );
        })
        .catch(err => {
            response.status(500).json({ error: 'Something wrong.' });
            console.error(`Error to get user info: ${err}`);
        });
}

exports.putUserinfo = function (request, response) {
    let dbUser = [];
    const req = request.body;
    const user = request.query.name;

    db.collection('users')
        .where('name', '==', user)
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                response.status(404).json({ error: 'No matching user information.' });
                return;
            }

            dbUser = snapshot.forEach(user =>
                dbUser.push(user.data())
            );

        }).catch(err => {
            response.status(500).json({ error: 'Something wrong.' })
            console.error(`Error to get user in database: ${err}`);
        });

    if (dbUser) {
        db.collection('users')
            .doc(user)
            .update(req)
            .then(() =>
                response.status(200).json(req))
            .catch(err => {
                response.status(500).json({ error: 'Something wrong.' })
                console.error(`Error to put user data in database: ${err}`);
            });
    }
}

exports.postUserInfo = function (request, response) {
    const user = request.body;
    const personName = user.hasOwnProperty('name')
        ? user.name
        : undefined;

    db.collection('users').doc(personName)
        .set(user)
        .then(() =>
            response.status(200).json(user))
        .catch(err => {
            response.status(500).json({ error: 'something wrong.' });
            console.err(`Error to put user data in database: ${err}`);
        });
};

exports.getUserLocation = function (request, response) {
    const userName = request.query.name;

    db.collection('location')
        .where('name', '==', userName)
        .get()
        .then((snapshot) => {
            if (snapshot.empty) {
                response.status(404).json({ error: 'No matching user location.' });
                return;
            }

            snapshot.forEach(user =>
                response.status(200).json(user.data())
            );
        })
        .catch(err => {
            response.status(500).json({ error: 'something wrong.' });
            console.error(`Error to get user location data in database: ${err}`);
        });
};

exports.putUserLocation = function (request, response) {
    let dbUser = [];

    const req = request.body;
    const user = request.query.name;

    db.collection('users')
        .where('name', '==', user)
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                response.status(404).json({ error: 'No matching user information.' });
                return;
            }

            dbUser = snapshot.forEach(user =>
                dbUser.push(user.data())
            );

        }).catch(err => {
            response.status(500).json({ error: 'Something wrong.' })
            console.error(`Error to get user in database: ${err}`);
        });

    if (dbUser) {
        db.collection('location')
            .doc(user)
            .update(req)
            .then(() =>
                response.status(200).json(req))
            .catch(err => {
                response.status(500).json({ error: 'Something wrong.' })
                console.error(`Error to put user data in database: ${err}`);
            });
    }
}

exports.postUserLocation = function (request, response) {
    const location = request.body;
    const userName = location.hasOwnProperty('name')
        ? location.name
        : undefined;

    db.collection('location').doc(userName)
        .set(location)
        .then(() =>
            response.status(200).json(location))
        .catch(err => {
            response.status(500).json({ error: 'something wrong.' });
            console.error(`Error to put user location data in database: ${err}`);
        });
};
