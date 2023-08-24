//Dependencies
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

//Moment
import * as moment from 'moment';
import 'moment/locale/pt-br';

//Dto
import { CreateUserLeadDto } from 'src/users/dto/create-user-lead.dto';

//Types
import {
  UTalkNotesCreated,
  UTalkMessageCreated,
} from './umbler_talk_whatsapp.types';

@Injectable()
export class UmblerTalkWhatsappService {
  constructor(private httpService: HttpService) {}

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
}
