/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD3DWT9hns4I29eCNrQ-CHTGD6BPau86Cs",
  authDomain: "web-notification-module.firebaseapp.com",
  projectId: "web-notification-module",
  storageBucket: "web-notification-module.appspot.com",
  messagingSenderId: "609601776369",
  appId: "1:609601776369:web:ddbe5987e9ae1b60235750",
  measurementId: "G-WKPSNQH99M"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };
  //self.registration.hideNotification();
  //self.registration.showNotification(notificationTitle, notificationOptions);
});
