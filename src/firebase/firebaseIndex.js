/**
 * Initialize firebase authentication and firestore.
 */

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtayX_GBxwPadUxjv9eaWwqNg5FrG_BoE",
  authDomain: "flash-card-app-40151.firebaseapp.com",
  projectId: "flash-card-app-40151",
  storageBucket: "flash-card-app-40151.appspot.com",
  messagingSenderId: "237624430673",
  appId: "1:237624430673:web:1265d9d7eb88ec14ece870",
  measurementId: "G-HK3VCLE22W"
};

firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const db=firebase.firestore();
export const fb=firebase;

export default { firebaseConfig }