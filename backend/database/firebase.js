const admin = require('firebase-admin');
require('firebase/firebase-firestore');

const serviceAccount = require("./firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://smartice-project.firebaseio.com'
});

const db = admin.firestore();

exports.database = function() {
    return db;
};
