import { Test, TestingModule } from '@nestjs/testing';
import { OffersDetailsController } from './offers_details.controller';
import { OffersDetailsService } from './offers_details.service';

describe('OffersDetailsController', () => {
  let controller: OffersDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffersDetailsController],
      providers: [OffersDetailsService],
    }).compile();

    controller = module.get<OffersDetailsController>(OffersDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
