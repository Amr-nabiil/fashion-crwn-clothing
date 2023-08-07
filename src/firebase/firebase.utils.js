import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config ={
    apiKey: "AIzaSyDP3Dj0xG_Nmg27JyXxPZEBa_a1RYoVj9Q",
    authDomain: "crwn-db-c1851.firebaseapp.com",
    projectId: "crwn-db-c1851",
    storageBucket: "crwn-db-c1851.appspot.com",
    messagingSenderId: "1006866581069",
    appId: "1:1006866581069:web:e12dbc94642c0204247e04",
    measurementId: "G-KZRY618C79"
  };

export const createUserProfileDocument = async (userAuth, additionaldata) => {
    if (!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();

if (!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionaldata
        })
    }
        catch(error){

         console.log('error creating user', error.message);
        }
    
}
  return userRef;
};

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;