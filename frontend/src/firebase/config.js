import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';




// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDI8jeVCIiHPxkRNVriikQiaDBoAF9TigA",
    authDomain: "the-ruthless.firebaseapp.com",
    projectId: "the-ruthless",
    storageBucket: "the-ruthless.appspot.com",
    messagingSenderId: "636424421503",
    appId: "1:636424421503:web:4fc0e0758b693112183f4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectStorage , projectFirestore , timestamp}
  