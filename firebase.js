import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCFoTRe8Wdhwz-3tGuMLHhWXropByB413U',
  authDomain: 'signal-clone-337f5.firebaseapp.com',
  projectId: 'signal-clone-337f5',
  storageBucket: 'signal-clone-337f5.appspot.com',
  messagingSenderId: '1029689959247',
  appId: '1:1029689959247:web:a9766207bd4eab8886db3a',
  measurementId: 'G-J82PND4HFR',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
