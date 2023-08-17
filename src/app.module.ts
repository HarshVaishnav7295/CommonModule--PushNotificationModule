import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PushNotificationModule } from './modules/push_notification/push_notification.module';
import {ConfigModule,ConfigService} from '@nestjs/config'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath : `.env`
    }),
    PushNotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
