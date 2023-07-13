import "firebase/compat/messaging";
import firebase from "firebase/compat/app";

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCX0QCbi91uyfR-FFoq6B6Ld955eknirfo",
    authDomain: "saghiomey-f6203.firebaseapp.com",
    projectId: "saghiomey-f6203",
    storageBucket: "saghiomey-f6203.appspot.com",
    messagingSenderId: "838247378490",
    appId: "1:838247378490:web:a8bc732e73e69f42b14f03",
    measurementId: "G-B3DNY6FW6W"
  };

  function requestPermission() {
    if (typeof Notification !== 'undefined') {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              console.log('Notification permission granted.');
              const messaging = firebase.messaging();
              messaging.getToken({ vapidKey: 'BOFSkNmEJDk2q0rkWBkcHgDOS0XimJBlS_C7zvscTkUWltOCdtvM7i5-U7SYuu4cB3ySIJusnm4aG0nqUktkpKs' }).then((currentToken) => {
                if (currentToken) {
                  console.log('currectToken: ', currentToken);
                } else {
                  // Show permission request UI
                  console.log('No registration token available. Request permission to generate one.');
                  // ...
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
              });
              // messaging.onMessage((payload) => {
              //   console.log('Message received. ', payload);
              //   // ...
              // });
            } else {
              console.log("don't have permission");
            }
          });
    }
    
  }
  requestPermission();