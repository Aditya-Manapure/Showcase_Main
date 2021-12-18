import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD77nj28XoCy_2m9hm1c70VDg5WyzbNOmE",
    authDomain: "showcase-b0aef.firebaseapp.com",
    databaseURL: "https://showcase-b0aef-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "showcase-b0aef",
    storageBucket: "showcase-b0aef.appspot.com",
    messagingSenderId: "255865701553",
    appId: "1:255865701553:web:45362d877781e7bc3b8e90",
    measurementId: "G-1HQXFDK710"
  });
 
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export { db, auth, storage,firebaseApp };