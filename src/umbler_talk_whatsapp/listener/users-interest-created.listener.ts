//Dependencies
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

//Event
import { UmblerTalkSendMessageEvent } from '../events/umbler-talk-send-message.event';

//Services
import { UsersSentMessagesWhatsappService } from 'src/users-sent-messages-whatsapp/users-sent-messages-whatsapp.service';

@Injectable()
export class UmblerTalkSendMessageListener {
  constructor(
    @Inject(forwardRef(() => UsersSentMessagesWhatsappService))
    private readonly usersSentMessagesWhatsappService: UsersSentMessagesWhatsappService,
  ) {

  }

  @OnEvent('uTalk.created')
  handleUserInterestCreatedEvent(event: UmblerTalkSendMessageEvent) {
    this.usersSentMessagesWhatsappService.sendMessages(event)
  }
}
