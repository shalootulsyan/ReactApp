import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAA7IX6-Y1caNxdI6omL5DTOOsiOrm-UHI",
  authDomain: "authtest-73fcc.firebaseapp.com",
  projectId: "authtest-73fcc",
  storageBucket: "authtest-73fcc.appspot.com",
  messagingSenderId: "372675179408",
  appId: "1:372675179408:web:6f74ace4737af696e8f915",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
