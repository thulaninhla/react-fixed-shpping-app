import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsr8jncyaWHIG3yJ6CwAmszHt66jIxLJ0",
    authDomain: "shopping-cart-app-e28fe.firebaseapp.com",
    projectId: "shopping-cart-app-e28fe",
    storageBucket: "shopping-cart-app-e28fe.appspot.com",
    messagingSenderId: "124132428815",
    appId: "1:124132428815:web:d6a90840be53e1925de77a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }