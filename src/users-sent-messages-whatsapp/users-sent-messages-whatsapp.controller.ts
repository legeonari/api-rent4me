import { Controller } from '@nestjs/common';
import { UsersSentMessagesWhatsappService } from './users-sent-messages-whatsapp.service';

@Controller('users-sent-messages-whatsapp')
export class UsersSentMessagesWhatsappController {
  constructor(
    private readonly usersSentMessagesWhatsappService: UsersSentMessagesWhatsappService
  ) {}

  sendMessage() {
    console.log('\n\n\n');
  }
}
