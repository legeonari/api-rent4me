import { Test, TestingModule } from '@nestjs/testing';
import { UmblerTalkWhatsappController } from './umbler_talk_whatsapp.controller';

describe('UmblerTalkWhatsappController', () => {
  let controller: UmblerTalkWhatsappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UmblerTalkWhatsappController],
    }).compile();

    controller = module.get<UmblerTalkWhatsappController>(UmblerTalkWhatsappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
