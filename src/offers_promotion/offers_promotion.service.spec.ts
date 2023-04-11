import { Test, TestingModule } from '@nestjs/testing';
import { OffersPromotionService } from './offers_promotion.service';

describe('OffersPromotionService', () => {
  let service: OffersPromotionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffersPromotionService],
    }).compile();

    service = module.get<OffersPromotionService>(OffersPromotionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
