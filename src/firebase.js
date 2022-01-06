import firebase from 'firebase'
var firebaseConfig = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  });

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth}