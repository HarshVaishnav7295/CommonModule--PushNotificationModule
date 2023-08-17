
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD3DWT9hns4I29eCNrQ-CHTGD6BPau86Cs",
  authDomain: "web-notification-module.firebaseapp.com",
  projectId: "web-notification-module",
  storageBucket: "web-notification-module.appspot.com",
  messagingSenderId: "609601776369",
  appId: "1:609601776369:web:ddbe5987e9ae1b60235750",
  measurementId: "G-WKPSNQH99M"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

export async function requestForNotification() {
  const permission = await Notification.requestPermission();
  if (permission == "granted") {
    // Generate Token

    // get vapikey from firebase console -> project setting -> cloud messaging -> web push certificate => key
    const tokenData = await getToken(messaging, {
      vapidKey:
        "BJrxstTREmoBhiFJH82MtjDwXUBHnKcuQ0PfHZMHBm3M7S4xpBoALXVyHGQ0DMVDZ97AOsvMFArf-Cd2cglmxxY", // remove askanirudh
    });

    return tokenData;
  } else if (permission == "denied") {
    alert("Notification permission denied !");
  }
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      
      resolve(payload);
    });
  });
