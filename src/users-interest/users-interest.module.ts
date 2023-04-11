//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersSentMessagesWhatsappModule } from 'src/users-sent-messages-whatsapp/users-sent-messages-whatsapp.module';

//Serices
import { UsersInterestService } from './users-interest.service';

//Controler
import { UsersInterestController } from './users-interest.controller';

//Entity
import { UsersInterest } from './entities/users-interest.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([UsersInterest]),
    UsersSentMessagesWhatsappModule
  ],
  controllers: [UsersInterestController],
  providers: [UsersInterestService],
  exports: [UsersInterestService],
})
export class UsersInterestModule {}
