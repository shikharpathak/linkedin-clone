import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyA8rNysYTACdRdrXwp_UbQZGQ-SQvKq5Cc",
  authDomain: "linkedin-clone-bd80f.firebaseapp.com",
  projectId: "linkedin-clone-bd80f",
  storageBucket: "linkedin-clone-bd80f.appspot.com",
  messagingSenderId: "1076381610975",
  appId: "1:1076381610975:web:872595fe87a9d0f8248a6a",
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };