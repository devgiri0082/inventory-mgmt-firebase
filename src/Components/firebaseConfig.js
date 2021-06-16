import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA4oBTWXRcVcEI9mO2wDB40y9p77EJW6cs",
  authDomain: "fir-test-cb478.firebaseapp.com",
  projectId: "fir-test-cb478",
  storageBucket: "fir-test-cb478.appspot.com",
  messagingSenderId: "1077823264866",
  appId: "1:1077823264866:web:d0d66182103ebb9261193b",
};

firebase.initializeApp(firebaseConfig);

let auth = firebase.auth();
let db = firebase.firestore();

export { auth, db };
