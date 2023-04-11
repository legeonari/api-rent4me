import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesDimensionsController } from './vehicles_dimensions.controller';
import { VehiclesDimensionsService } from './vehicles_dimensions.service';

describe('VehiclesDimensionsController', () => {
  let controller: VehiclesDimensionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesDimensionsController],
      providers: [VehiclesDimensionsService],
    }).compile();

    controller = module.get<VehiclesDimensionsController>(VehiclesDimensionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
