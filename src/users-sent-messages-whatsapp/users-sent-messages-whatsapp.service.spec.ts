import { Test, TestingModule } from '@nestjs/testing';
import { UsersSentMessagesWhatsappService } from './users-sent-messages-whatsapp.service';

describe('UsersSentMessagesWhatsappService', () => {
  let service: UsersSentMessagesWhatsappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersSentMessagesWhatsappService],
    }).compile();

    service = module.get<UsersSentMessagesWhatsappService>(UsersSentMessagesWhatsappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
