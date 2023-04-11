import { Test, TestingModule } from '@nestjs/testing';
import { OffersDetailsService } from './offers_details.service';

describe('OffersDetailsService', () => {
  let service: OffersDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffersDetailsService],
    }).compile();

    service = module.get<OffersDetailsService>(OffersDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
