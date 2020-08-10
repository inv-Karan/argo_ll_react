import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDjbF__63n2QyqFfBb-vD5QukcO1TKUOHM",
  authDomain: "myfarmeasychatdemo.firebaseapp.com",
  databaseURL: "https://myfarmeasychatdemo.firebaseio.com",
  projectId: "myfarmeasychatdemo",
  storageBucket: "myfarmeasychatdemo.appspot.com",
  messagingSenderId: "428961958095",
  appId: "1:428961958095:web:404056fa92692dbf274fba",
  measurementId: "G-ZQ51X904J7"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();