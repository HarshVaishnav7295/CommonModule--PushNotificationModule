import { Module } from '@nestjs/common';
import { PushNotificationController } from './push_notification.controller';
import { NotificationService } from 'src/services/push_notification.service';

@Module({
  controllers: [PushNotificationController],
  providers:[NotificationService]
})
export class PushNotificationModule {}
