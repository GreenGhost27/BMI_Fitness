import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDA6e_5V00Tk73v6_KNQRJYQ-0nyarmZyM",
    authDomain: "bmi-fitness.firebaseapp.com",
    databaseURL: "https://bmi-fitness.firebaseio.com",
    projectId: "bmi-fitness",
    storageBucket: "bmi-fitness.appspot.com",
    messagingSenderId: "460101708077",
    appId: "1:460101708077:web:f33a2c0459ffe4e74a4ba4"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
