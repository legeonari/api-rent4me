//Dependencies
import { HttpModule } from '@nestjs/axios';

//Modules
import { Module, forwardRef } from '@nestjs/common';
import { UsersSentMessagesWhatsappModule } from 'src/users-sent-messages-whatsapp/users-sent-messages-whatsapp.module';

//Services
import { UmblerTalkWhatsappService } from './umbler_talk_whatsapp.service';

//Listner
import { UmblerTalkSendMessageListener } from './listener/users-interest-created.listener';
import { UmblerTalkWhatsappController } from './umbler_talk_whatsapp.controller';

@Module({
  imports: [HttpModule, forwardRef(() => UsersSentMessagesWhatsappModule)],
  providers: [UmblerTalkWhatsappService, UmblerTalkSendMessageListener],
  exports: [UmblerTalkWhatsappService],
  controllers: [UmblerTalkWhatsappController],
})
export class UmblerTalkWhatsappModule {}
