import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ISendNotification{
    @IsString()
    @ApiProperty({example:"true"})
    success:boolean
    @IsString()
    @ApiProperty({example:"Notification sent"})
    message:string
}