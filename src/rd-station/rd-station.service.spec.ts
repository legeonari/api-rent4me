import { Test, TestingModule } from '@nestjs/testing';
import { RdStationService } from './rd-station.service';

describe('RdStationService', () => {
  let service: RdStationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RdStationService],
    }).compile();

    service = module.get<RdStationService>(RdStationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
