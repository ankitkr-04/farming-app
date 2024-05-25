import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCZzQMkurDwH3XOn2gWn3e8Zk3W6mYKVT0",
    authDomain: "farming-app-8cb0e.firebaseapp.com",
    projectId: "farming-app-8cb0e",
    storageBucket: "farming-app-8cb0e.appspot.com",
    messagingSenderId: "16828693592",
    appId: "1:16828693592:web:2779b40c3fc10ba638de2d"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIRESTORE = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIRESTORE };