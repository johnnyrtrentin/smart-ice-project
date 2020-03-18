'use strict';

const model = require('../model/apiModel');
const firestore = require('../../database/firebase');

exports.getUserInfo = function (request, response) {
    firestore.database().collection("users").get()
        .then(c => {
            c.forEach(res =>{
                response.status(200).json(res.data());
            });
        })
        .catch(er => console.log(er));
}

exports.postUserInfo = function (request, response) {
    const json = { "a": "a" };
    firestore.database().collection("Teste").doc("teste2").set({ json })
    response.status(200).json({ json });
}

exports.getUserLocation = function (request, response) {
    response.status(200).json({});
}

exports.postUserLocation = function (request, response) {
    response.status(200).json({});
}

exports.getUserLocation = function (request, response) {
    response.status(200).json({});
}

exports.getUserDevice = function (request, response) {
    response.status(200).json({});
}

exports.postUserDevvice = function (request, response) {
    response.status(200).json({});
}