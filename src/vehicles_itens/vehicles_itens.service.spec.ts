import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesItemsService } from './vehicles_itens.service';

describe('VehiclesItemsService', () => {
  let service: VehiclesItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesItemsService],
    }).compile();

    service = module.get<VehiclesItemsService>(VehiclesItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
