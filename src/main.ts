import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('Push Notification Module')
    .setDescription(`<h4>This is Push Notification module ( common functionalities ) project.</h4><p>Contains features : <li>Send notification</li><li>Send notification with data</li></p>`)
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  await app.listen(8001);
}
bootstrap();
