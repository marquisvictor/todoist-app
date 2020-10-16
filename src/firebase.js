import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBiYCsMcXRLuFBuFOE3pJRWNtLZzuWULKc",
    authDomain: "todoist-fb821.firebaseapp.com",
    databaseURL: "https://todoist-fb821.firebaseio.com",
    projectId: "todoist-fb821",
    storageBucket: "todoist-fb821.appspot.com",
    messagingSenderId: "326145727699",
    appId: "1:326145727699:web:fccb068f435667f7a04826",
    measurementId: "G-BM5VQJQN2M"
})


export { firebaseConfig as firebase };