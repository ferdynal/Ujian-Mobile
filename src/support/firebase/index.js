import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAdZjsq75RkhyIgIIA7vTdAuY8srEOZqDs",
    authDomain: "managerapp-7326a.firebaseapp.com",
    databaseURL: "https://managerapp-7326a.firebaseio.com",
    projectId: "managerapp-7326a",
    storageBucket: "managerapp-7326a.appspot.com",
    messagingSenderId: "372638965065",
    appId: "1:372638965065:web:21aaf3c684038a0c"
  };

export const Fire = Firebase.initializeApp(firebaseConfig)