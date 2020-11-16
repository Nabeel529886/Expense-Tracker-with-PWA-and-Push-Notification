import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDbG_9zrtL-fiXvK_0dGG_DM5PxEIsvOGE",
    authDomain: "expense-tracker-9fc22.firebaseapp.com",
    databaseURL: "https://expense-tracker-9fc22.firebaseio.com",
    projectId: "expense-tracker-9fc22",
    storageBucket: "expense-tracker-9fc22.appspot.com",
    messagingSenderId: "612567682473",
    appId: "1:612567682473:web:8d153ce5a0cec2578508b8"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


export function configNotification() {
    
    Notification.requestPermission().then((permission) => {
        messaging.getToken().then((currentToken) => {
          console.log(`token: ${currentToken}`)
          
          if (currentToken) {
          } else {
            // Show permission request.
            console.log('No registration token available. Request permission to generate one.');

          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);

        });
    
    
    })

}