import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzAzJqbDSjNZvUZkCAQo5_pMX6vKNUiCQ",
    authDomain: "juragankaos-baff6.firebaseapp.com",
    databaseURL: "https://juragankaos-baff6.firebaseio.com",
    projectId: "juragankaos-baff6",
    storageBucket: "juragankaos-baff6.appspot.com",
    messagingSenderId: "153378941082",
    appId: "1:153378941082:web:16f804df0a3b9598585723",
    measurementId: "G-1ZDDPYL96L"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;