//Dependencies
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

//Moment
import * as moment from 'moment';
import 'moment/locale/pt-br';

//DTO
import { CreateUserLeadDto } from 'src/users/dto/create-user-lead.dto';

@Injectable()
export class RdStationService {
  constructor(private httpService: HttpService) {}

  async createContact(user: CreateUserLeadDto) {
    console.log('--- Send Lead - RD --- ');
    //Not created card is not prod
    if (process.env.MODE != 'prod') return;

    const createContact: { data: { contact: { id: string } } } =
      await this.httpService
        .post(
          `${process.env.RD_API_BASEURL}/deals?token=${process.env.RD_TOKEN}`,
          {
            deal: {
              deal_stage_id: process.env.RD_DEAL_ID,
              name: user.name,
              rating: 1,
            },
            contacts: [
              {
                name: user.name,
                phones: [
                  {
                    phone: `+55${user.phone
                      .replace(/[^\w\s]/gi, '')
                      .replace(/\s/g, '')
                      .trim()}`,
                    type: 'person',
                  },
                ],
                title: user.name,
              },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .toPromise();
    return createContact?.data;
  }
}
