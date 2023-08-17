import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendNotificationToDeviceDto {
  @IsString()
  @ApiProperty({ example: '2dr3rs23sds3' })
  token: string;

  @IsString()
  @ApiProperty({ example: 'Notification Demo' })
  title: string;

  @IsString()
  @ApiProperty({ example: 'This is notification demo project' })
  message: string;
}
