//Dependencies
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventEmitter2 } from '@nestjs/event-emitter';

//Dto
import { CreateUsersSentMessagesWhatsappDto } from './dto/create-users-sent-messages-whatsapp.dto';

//Entity
import { UsersSentMessagesWhatsapp } from './entities/users-sent-messages-whatsapp.entity';

//Services
import { UmblerTalkWhatsappService } from 'src/umbler_talk_whatsapp/umbler_talk_whatsapp.service';

@Injectable()
export class UsersSentMessagesWhatsappService {
  constructor(
    @InjectModel(UsersSentMessagesWhatsapp)
    private UsersSentMessagesWhatsappModel: typeof UsersSentMessagesWhatsapp,

    @Inject(forwardRef(() => UmblerTalkWhatsappService))
    private readonly umblerTalkWhatsappService: UmblerTalkWhatsappService,

    private eventEmitter: EventEmitter2,
  ) {}

  create(
    createUsersSentMessagesWhatsappDto: CreateUsersSentMessagesWhatsappDto,
  ) {
    return this.UsersSentMessagesWhatsappModel.create(
      createUsersSentMessagesWhatsappDto,
    );
  }

  async sendMessages({ params }: { params: Array<string | null> }) {
    console.log('--------- Iniciando mensagens ---------');
    const listMessages = await this.UsersSentMessagesWhatsappModel.findAll({
      attributes: [
        'id',
        'userId',
        'template',
        'idContactUtalk',
        'message',
        'note',
        'status',
      ],
      where: {
        status: false,
      },
      raw: true,
    });

    listMessages.length &&
      listMessages.map(async (item) => {
        this.umblerTalkWhatsappService.AddNotes({
          note: item.note,
          idContactUtalk: item.idContactUtalk,
        });

        const send = await this.umblerTalkWhatsappService.SendMessage({
          message: item.message,
          idContactUtalk: item.idContactUtalk,
          template: item.template,
          params: params,
        });

        !!send &&
          this.UsersSentMessagesWhatsappModel.update(
            {
              status: true,
            },
            {
              where: {
                id: item.id,
              },
            },
          );
      });
    console.log('--------- Finalizando mensagens ---------');
  }
}
