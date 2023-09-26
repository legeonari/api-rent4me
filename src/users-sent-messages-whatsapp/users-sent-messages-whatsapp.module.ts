//Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { UsersSentMessagesWhatsappService } from './users-sent-messages-whatsapp.service';

//Controlers
import { UsersSentMessagesWhatsappController } from './users-sent-messages-whatsapp.controller';

//Entity
import { UsersSentMessagesWhatsapp } from './entities/users-sent-messages-whatsapp.entity';
import { UmblerTalkWhatsappModule } from 'src/umbler_talk_whatsapp/umbler_talk_whatsapp.module';

@Module({
  imports: [
    SequelizeModule.forFeature([UsersSentMessagesWhatsapp]),
    UmblerTalkWhatsappModule,
  ],
  controllers: [UsersSentMessagesWhatsappController],
  providers: [UsersSentMessagesWhatsappService],
  exports: [UsersSentMessagesWhatsappService],
})
export class UsersSentMessagesWhatsappModule {}
