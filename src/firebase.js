import firebase from 'firebase/app';
import firebase from 'firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messageSenderId: '',
    apiId: '',
})


export { firebaseConfig as firebase };