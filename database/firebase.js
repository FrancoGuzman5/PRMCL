import firebase from 'firebase/compat/app';
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
}