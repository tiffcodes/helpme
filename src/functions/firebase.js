import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyA0W9iOqSMA8J8tfNlhjwLJEWnOOAaM7M8',
    authDomain: 'helpme-4e177.firebaseapp.com',
    databaseURL: 'https://helpme-4e177.firebaseio.com',
    projectId: 'helpme-4e177',
    storageBucket: 'helpme-4e177.appspot.com',
    messagingSenderId: '341286184083',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
