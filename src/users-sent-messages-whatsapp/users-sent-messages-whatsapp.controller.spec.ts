import { Test, TestingModule } from '@nestjs/testing';
import { UsersSentMessagesWhatsappController } from './users-sent-messages-whatsapp.controller';
import { UsersSentMessagesWhatsappService } from './users-sent-messages-whatsapp.service';

describe('UsersSentMessagesWhatsappController', () => {
  let controller: UsersSentMessagesWhatsappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersSentMessagesWhatsappController],
      providers: [UsersSentMessagesWhatsappService],
    }).compile();

    controller = module.get<UsersSentMessagesWhatsappController>(UsersSentMessagesWhatsappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
