importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDbG_9zrtL-fiXvK_0dGG_DM5PxEIsvOGE",
    authDomain: "expense-tracker-9fc22.firebaseapp.com",
    databaseURL: "https://expense-tracker-9fc22.firebaseio.com",
    projectId: "expense-tracker-9fc22",
    storageBucket: "expense-tracker-9fc22.appspot.com",
    messagingSenderId: "612567682473",
    appId: "1:612567682473:web:8d153ce5a0cec2578508b8"
  };

firebase.initializeApp(firebaseConfig);
firebase.messaging();