//Dependencies
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

//Moment
import * as moment from 'moment';
import 'moment/locale/pt-br';

//Dto
import { CreateUserLeadDto } from 'src/users/dto/create-user-lead.dto';
import { WebhookDto } from './dto/webhook.dto';

//Types
import {
  UTalkNotesCreated,
  UTalkMessageCreated,
} from './umbler_talk_whatsapp.types';

//Services
import { UsersService } from 'src/users/users.service';
import { UsersTagsService } from 'src/users-tags/users-tags.service';

@Injectable()
export class UmblerTalkWhatsappService {
  constructor(
    private httpService: HttpService,

    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    @Inject(forwardRef(() => UsersTagsService))
    private readonly usersTagsService: UsersTagsService,
  ) {}

  async createContact(user: CreateUserLeadDto) {
    const createContact: { data: { contact: { id: string } } } =
      await this.httpService
        .post(
          `${process.env.UMBLER_API}/contacts`,
          {
            name: user.name,
            phoneNumber: user.phone,
            organizationId: process.env.UBMLER_ORGANIZATION,
            profilePictureUrl: user.thumb,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.UMBLER_TOKEN}`,
            },
          },
        )
        .toPromise();

    return createContact?.data;
  }

  async AddNotes(notes: UTalkNotesCreated) {
    const createNotes = await this.httpService
      .post(
        `${process.env.UMBLER_API}/contacts/${notes.idContactUtalk}/notes`,
        {
          content: notes.note,
          organizationId: process.env.UBMLER_ORGANIZATION,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.UMBLER_TOKEN}`,
          },
        },
      )
      .toPromise();

    return createNotes?.data;
  }

  async SendMessage(message: UTalkMessageCreated) {
    const now = moment();

    const chat = await this.httpService
      .post(
        `${process.env.UMBLER_API}/scheduled-messages`,
        {
          dateSendAtUTC: moment(now).add(10, 'seconds').toISOString(),
          message: message.message.replace(/[\r\n]+/g, ''),
          organizationId: 'ZA-UxxUUE7qySBy4',
          channelId: 'ZBIu7CJONXGA5DjG',
          contactId: message.idContactUtalk,
          templateId: message.template,
          params: message.params || [],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.UMBLER_TOKEN}`,
          },
        },
      )
      .toPromise();

    return chat?.data;
  }

  async GetChats(ChatState: string) {
    const chat = await this.httpService
      .get(
        `${process.env.UMBLER_API}/chats?organizationId=${process.env.UBMLER_ORGANIZATION}&ChatState=${ChatState}&Order=Desc&Skip=0&Take=30&Behavior=GetSliceOnly`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.UMBLER_TOKEN}`,
          },
        },
      )
      .toPromise();

    return chat?.data;
  }

  async Webhook(params: WebhookDto) {
    console.log('-----');

    switch (params.Type) {
      case 'Message':
        console.log('---- Ação relacionada à mensagem. ----');
        this.usersService.checkUserWebhookUmbler({
          name: params.Payload.Content.Contact.Name,
          phone: params.Payload.Content.Contact.PhoneNumber,
          idContactUtalk: params.Payload.Content.Contact.Id,
          thumb: !params.Payload.Content.Contact.ProfilePictureUrl
            ? null
            : params.Payload.Content.Contact.ProfilePictureUrl,
          origin: 'umbler',
        });

        break;
    }
  }

  @Cron('*/15 * * * *')
  async handleCronContactsOpenCard() {
    await this.HandleCronContacts('Open');
  }

  @Cron('*/25 * * * *')
  async handleCronContactsClosedCard() {
    await this.HandleCronContacts('Closed');
  }

  async HandleCronContacts(_ChatState: string) {
    try {
      console.log(
        `---- \n\n Rodando Cron de integração de Tags.  \n Type ${_ChatState} \n\n----`,
      );
      const list = await this.GetChats(_ChatState);
      list.items.map((contact) => {
        this.usersTagsService.eventIntegration({
          user: {
            Id: contact.contact.id,
            Tags: contact.contact.tags.map((tag) => ({ ...tag, Id: tag.id })),
            IsBlocked: contact.contact.isBlocked,
            IsOptIn: contact.contact.isOptIn,
            LastActiveUTC: contact.contact.lastActiveUTC,
            Name: contact.contact.name,
            PhoneNumber: contact.contact.phoneNumber,
            ScheduledMessages: contact.contact.scheduledMessages,
            ProfilePictureUrl: !contact.contact.profilePictureUrl
              ? null
              : contact.contact.profilePictureUrl,
          },
        });
      });
    } catch (e) {
      console.log('Erro Cron HandleCronContacts', e);
    }
  }
}
