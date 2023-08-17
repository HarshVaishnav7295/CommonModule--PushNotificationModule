import { Controller, Post,Req,Res,Body } from '@nestjs/common';
import { NotificationService } from 'src/services/push_notification.service';
import {Request,Response} from 'express'
import { SendNotificationToDeviceDto } from 'src/dtos/SendNotificationToDevice.dto';
import { SendNotificationToDeviceWithDataDto } from 'src/dtos/SendNotificationToDeviceWithData.dto';
import {ApiOkResponse} from '@nestjs/swagger'
import { ISendNotification } from 'src/interfaces/SendNotification.interface';
@Controller('api/push-notification')
export class PushNotificationController {
    constructor(private readonly notificationService : NotificationService){}

    @Post('/send')
    @ApiOkResponse({
        type:ISendNotification
    })
    async sendNotificationToDevice(@Req() req:Request,@Res() res:Response,@Body() body:SendNotificationToDeviceDto){
        try{
            if(!body.token){
                return res.status(400).json({
                    success:false,
                    error:"Please provide device token"
                })
            }else{
                const resp = await this.notificationService.sendMessage({
                    token : body.token,
                    message : body.message,
                    title : body.title
                })
                return res.status(200).json({
                    success:true,
                    message:"Notification sent"
                })
            }
        }catch(error:any){
            console.log("error->",error)
            return res.status(500).json({
                success:false,
                error:error.message
            })
        }
    }

    @Post('/sendWithData')
    @ApiOkResponse({
        type:ISendNotification
    })
    async sendNotificationToDeviceWithData(@Req() req:Request,@Res() res:Response,@Body() body:SendNotificationToDeviceWithDataDto){
        try{
            if(!body.token){
                return res.status(400).json({
                    success:false,
                    error:"Please provide device token"
                })
            }else{
                const resp = await this.notificationService.sendMessageWithData({
                    token : body.token,
                    message : body.message,
                    title : body.title,
                    data:body.data
                })
                return res.status(200).json({
                    success:true,
                    message:"Notification sent"
                })
            }
        }catch(error:any){
            console.log("error->",error)
            return res.status(500).json({
                success:false,
                error:error.message
            })
        }
    }
}
