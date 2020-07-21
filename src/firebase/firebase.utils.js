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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); //get data by id di collection (table) users

    const snapshot = await userRef.get()

    //check exist data in database, if not exist let's create
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log('error creating users', error.message)
        }
    }

    return userRef;

  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;