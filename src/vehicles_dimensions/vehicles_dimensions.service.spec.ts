import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesDimensionsService } from './vehicles_dimensions.service';

describe('VehiclesDimensionsService', () => {
  let service: VehiclesDimensionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesDimensionsService],
    }).compile();

    service = module.get<VehiclesDimensionsService>(VehiclesDimensionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
