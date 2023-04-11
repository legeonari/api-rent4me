import { Test, TestingModule } from '@nestjs/testing';
import { OffersPromotionController } from './offers_promotion.controller';
import { OffersPromotionService } from './offers_promotion.service';

describe('OffersPromotionController', () => {
  let controller: OffersPromotionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffersPromotionController],
      providers: [OffersPromotionService],
    }).compile();

    controller = module.get<OffersPromotionController>(OffersPromotionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
