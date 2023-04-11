//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersDetailssModule } from 'src/users-details/users-details.module';
import { UsersInterestModule } from 'src/users-interest/users-interest.module';
import { UsersContractsModule } from 'src/users-contracts/users-contracts.module';
import { UsersSentMessagesWhatsappModule } from 'src/users-sent-messages-whatsapp/users-sent-messages-whatsapp.module';
import { UmblerTalkWhatsappModule } from 'src/umbler_talk_whatsapp/umbler_talk_whatsapp.module';

//Services
import { UsersService } from './users.service';

//Controllers
import { UsersController } from './users.controller';

//Entity
import { Users } from './entities/user.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Users]),
    UsersDetailssModule,
    UsersInterestModule,
    UsersContractsModule,
    UsersSentMessagesWhatsappModule,
    UmblerTalkWhatsappModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
