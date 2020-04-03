import firebase from "firebase";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCRcEthiCdTKgwW9fjaLBmonREMFx-iRoI",
    authDomain: "react-project-87f83.firebaseapp.com",
    databaseURL: "https://react-project-87f83.firebaseio.com",
    projectId: "react-project-87f83",
    storageBucket: "react-project-87f83.appspot.com",
    messagingSenderId: "104265005250",
    appId: "1:104265005250:web:a030b7261df36916b4635b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    // facebook: new firebase.auth.GoogleAuthProvider()
}


export const firestore = firebase.firestore();

export default firebase;