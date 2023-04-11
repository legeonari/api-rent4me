import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesStoresController } from './vehicles_stores.controller';
import { VehiclesStoresService } from './vehicles_stores.service';

describe('VehiclesStoresController', () => {
  let controller: VehiclesStoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesStoresController],
      providers: [VehiclesStoresService],
    }).compile();

    controller = module.get<VehiclesStoresController>(VehiclesStoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
