import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesCategoriesController } from './vehicles_categories.controller';
import { VehiclesCategoriesService } from './vehicles_categories.service';

describe('VehiclesCategoriesController', () => {
  let controller: VehiclesCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesCategoriesController],
      providers: [VehiclesCategoriesService],
    }).compile();

    controller = module.get<VehiclesCategoriesController>(VehiclesCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
