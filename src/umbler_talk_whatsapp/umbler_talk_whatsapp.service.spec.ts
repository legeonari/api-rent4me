import { Test, TestingModule } from '@nestjs/testing';
import { UmblerTalkWhatsappService } from './umbler_talk_whatsapp.service';

describe('UmblerTalkWhatsappService', () => {
  let service: UmblerTalkWhatsappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UmblerTalkWhatsappService],
    }).compile();

    service = module.get<UmblerTalkWhatsappService>(UmblerTalkWhatsappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
