import firebase from "firebase/app";
import "firebase/functions"
const config = {
    apiKey: "AIzaSyAAhigrbz9tSVMAyPEENkkFIXnHk9CrkBM",
    authDomain: "video-demo-b7a8f.firebaseapp.com",
    projectId: "video-demo-b7a8f",
    storageBucket: "video-demo-b7a8f.appspot.com",
    messagingSenderId: "360943912441",
    appId: "1:360943912441:web:f3d3018ec8e64b32ba6928"
  };

firebase.initializeApp(config);
export default firebase;
