import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
const firebaseConfig  = {
  apiKey: "AIzaSyDi7q0EKR5CPgHgezQyb7CLgoh9uMyGtZQ",
  authDomain: "shoestoredemo.firebaseapp.com",
  databaseURL: "https://shoestoredemo.firebaseio.com",
  projectId: "shoestoredemo",
  storageBucket: "shoestoredemo.appspot.com",
  messagingSenderId: "912573993131",
  appId: "1:912573993131:web:a3af98bbeeea7f36faa7ee",
  measurementId: "G-XXKT804ZCE"
};
firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
var database=firebase.firestore();
export{
   database,storage,firebase as default
}
