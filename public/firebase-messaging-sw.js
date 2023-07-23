importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

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

  firebase.initializeApp(firebaseConfig);

  // Retrieve firebase messaging
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
   // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image,
      sound: payload.notification.sound
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });