import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesBrandService } from './vehicles_brand.service';

describe('VehiclesBrandService', () => {
  let service: VehiclesBrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesBrandService],
    }).compile();

    service = module.get<VehiclesBrandService>(VehiclesBrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
