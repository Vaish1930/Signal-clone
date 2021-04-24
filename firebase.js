import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVCfies0VnkJAOlaSrJ_231JJDnMKXcrg",
  authDomain: "signal-clone-cdfdc.firebaseapp.com",
  projectId: "signal-clone-cdfdc",
  storageBucket: "signal-clone-cdfdc.appspot.com",
  messagingSenderId: "243894757385",
  appId: "1:243894757385:web:4cbce773c5b68dae84f0d8",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
