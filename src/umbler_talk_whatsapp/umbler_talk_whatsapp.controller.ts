//Dependencies
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

//Serives
import { UmblerTalkWhatsappService } from './umbler_talk_whatsapp.service';

@Controller('umbler-talk-whatsapp')
@ApiTags('Umbler')
@ApiBearerAuth('Bearer')
@Controller('umbler')
export class UmblerTalkWhatsappController {
  constructor(
    private readonly umblerTalkWhatsappService: UmblerTalkWhatsappService
  ) {}

  @Post('webhook')
  webhook(@Body() webhook: any) {
    return this.umblerTalkWhatsappService.Webhook(webhook);
  }
}
