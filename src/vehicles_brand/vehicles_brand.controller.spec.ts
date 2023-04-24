import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesBrandController } from './vehicles_brand.controller';
import { VehiclesBrandService } from './vehicles_brand.service';

describe('VehiclesBrandController', () => {
  let controller: VehiclesBrandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesBrandController],
      providers: [VehiclesBrandService],
    }).compile();

    controller = module.get<VehiclesBrandController>(VehiclesBrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
