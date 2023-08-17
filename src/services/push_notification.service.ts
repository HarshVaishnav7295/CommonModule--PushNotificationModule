import { Injectable } from '@nestjs/common';
import * as FirbaseCredentials from '../../web-notification-module-firebase-adminsdk-pzsdo-d16c2f94ee.json';

const firebase = require('firebase-admin');
const { getMessaging } = require('firebase-admin/messaging');
@Injectable()
export class NotificationService {
  constructor() {
    const firebaseCredentials = FirbaseCredentials;
    firebase.initializeApp({
      credential: firebase.credential.cert(firebaseCredentials),
    });
  }

  async sendMessage(data: { token: string; title: string; message: string }) {
    
    const newMessage = {
      notification: {
        title: data.title,
        body: data.message,
      },
      token: data.token,
    };
    return await getMessaging()
        .send(newMessage)
      .then((resp: any) => {
        console.log("notification sent.")
        return resp;
      })
      .catch((error: any) => {
        console.log('Error : ', error);
      });
  }

  async sendMessageWithData(data: { token: string; title: string; message: string,data:any }) {
    
    const newMessage = {
      notification: {
        title: data.title,
        body: data.message,
      },
      data:data.data,
      token: data.token,
    };
    return await getMessaging()
        .send(newMessage)
      .then((resp: any) => {
        console.log("notification with data sent.")
        return resp;
      })
      .catch((error: any) => {
        console.log('Error : ', error);
      });
  }
}
