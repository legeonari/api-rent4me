import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesCategoriesService } from './vehicles_categories.service';

describe('VehiclesCategoriesService', () => {
  let service: VehiclesCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesCategoriesService],
    }).compile();

    service = module.get<VehiclesCategoriesService>(VehiclesCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
