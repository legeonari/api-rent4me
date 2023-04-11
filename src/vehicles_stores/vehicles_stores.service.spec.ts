import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesStoresService } from './vehicles_stores.service';

describe('VehiclesStoresService', () => {
  let service: VehiclesStoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesStoresService],
    }).compile();

    service = module.get<VehiclesStoresService>(VehiclesStoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
