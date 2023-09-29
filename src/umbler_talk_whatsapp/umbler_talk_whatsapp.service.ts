//Dependencies
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, forwardRef } from '@nestjs/common';

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

  async Webhook(params: WebhookDto) {
    console.log('-----');
    console.log('\n\n\n', params);
    console.log(JSON.stringify(params));

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
      case 'ChatPrivateStatusChanged':
        console.log('---- Status do chat alterado. ----');
        this.usersTagsService.eventIntegration({
          user: params.Payload.Content.Contact,
        });
        break;
      case 'ChatClosed':
        console.log('---- Chat fechado. ----');
        break;
      case 'MemberTransfer':
        console.log('---- Membro transferido. ----');
        break;
      case 'ChatSectorChanged':
        console.log('---- Setor do chat alterado. ----');
        break;
      default:
        console.log('---- Ação não reconhecida. ----');

        break;
    }
  }
}
