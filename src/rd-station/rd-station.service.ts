//Dependencies
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

//DTO
import { CreateUserLeadDto } from 'src/users/dto/create-user-lead.dto';

@Injectable()
export class RdStationService {
  constructor(private httpService: HttpService) {}

  async createContact(user: CreateUserLeadDto) {
    const createContact: { data: { contact: { id: string } } } =
      await this.httpService
        .post(
          `${process.env.RD_API_BASEURL}/deals?token=${process.env.RD_TOKEN}`,
          {
            deal: {
              deal_stage_id: '632f13e2c0828600286c6fbd',
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
