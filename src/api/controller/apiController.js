'use strict';

const model = require('../model/apiModel');
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
        .catch(err => response.status(500).json({ error: 'Something wrong.' }));
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
        .catch(err => response.status(500).json({ error: 'Something wrong.' }));
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
        .catch(err => response.status(500).json({ error: 'something wrong.' }));
};

exports.getUserLocation = function (request, response) {
    const userLocation = request.query.name;
    const userName = userLocation.hasOwnProperty('username') 
        ? userLocation.name 
        : undefined;

    db.collection('location')
        .where('username', '==', userName)
        .get()
        .then((snapshot) => {
            if (snapshot.empty) {
                response.status(404).json({ error: 'No matching user location.' });
                return;
            }
            response.status(200).json();

        })
        .catch(err =>err => response.status(500).json({ error: 'something wrong.' }));
};

exports.postUserLocation = function (request, response) {
    const location = request.body;
    const userName = location.hasOwnProperty('username')
        ? location.username 
        : undefined;

    db.collection('location').doc(userName)
        .set(location)
        .then(() =>
            response.status(200).json(location))
        .catch(err => response.status(500).json({ error: 'something wrong.' }))
};
