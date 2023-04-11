import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesStoresContentsService } from './vehicles_stores_contents.service';

describe('VehiclesStoresContentsService', () => {
  let service: VehiclesStoresContentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesStoresContentsService],
    }).compile();

    service = module.get<VehiclesStoresContentsService>(VehiclesStoresContentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
