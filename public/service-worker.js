importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyCX0QCbi91uyfR-FFoq6B6Ld955eknirfo",
    authDomain: "saghiomey-f6203.firebaseapp.com",
    projectId: "saghiomey-f6203",
    storageBucket: "saghiomey-f6203.appspot.com",
    messagingSenderId: "838247378490",
    appId: "1:838247378490:web:a8bc732e73e69f42b14f03",
    measurementId: "G-B3DNY6FW6W"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = 'a';
    const notificationOptions = {
      body: 'b',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
});