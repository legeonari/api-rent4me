//Dependencies
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { CreateUserInterestLeadDto } from './dto/create-user-interest-lead.dto';
import { UpdateUsersInterestDto } from './dto/update-users-interest.dto';

//Entity
import { UsersInterest } from './entities/users-interest.entity';

//Services
import { UsersSentMessagesWhatsappService } from 'src/users-sent-messages-whatsapp/users-sent-messages-whatsapp.service';

@Injectable()
export class UsersInterestService {
  constructor(
    @InjectModel(UsersInterest)
    private UsersInterestModel: typeof UsersInterest,

    @Inject(forwardRef(() => UsersSentMessagesWhatsappService))
    private readonly usersSentMessagesWhatsappService: UsersSentMessagesWhatsappService,
  ) {}

  async create(createUserInterestLeadDto: [CreateUserInterestLeadDto]) {
    return this.UsersInterestModel.bulkCreate(createUserInterestLeadDto);
  }
}
