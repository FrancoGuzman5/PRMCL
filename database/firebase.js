/*import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-OWHjfXUM5F3va1wk7gyNq005rCgTd5k",
    authDomain: "prmcl-89217.firebaseapp.com",
    projectId: "prmcl-89217",
    storageBucket: "prmcl-89217.appspot.com",
    messagingSenderId: "842962590172",
    appId: "1:842962590172:web:fd480e11d2b2c7b86f5719"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default{
    firebase,
    db,
}*/

// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-OWHjfXUM5F3va1wk7gyNq005rCgTd5k",
  authDomain: "prmcl-89217.firebaseapp.com",
  projectId: "prmcl-89217",
  storageBucket: "prmcl-89217.appspot.com",
  messagingSenderId: "842962590172",
  appId: "1:842962590172:web:fd480e11d2b2c7b86f5719"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
var auth = firebase.auth()

export {auth};
