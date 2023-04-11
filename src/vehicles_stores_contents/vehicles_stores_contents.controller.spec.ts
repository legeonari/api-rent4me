import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesStoresContentsController } from './vehicles_stores_contents.controller';
import { VehiclesStoresContentsService } from './vehicles_stores_contents.service';

describe('VehiclesStoresContentsController', () => {
  let controller: VehiclesStoresContentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesStoresContentsController],
      providers: [VehiclesStoresContentsService],
    }).compile();

    controller = module.get<VehiclesStoresContentsController>(VehiclesStoresContentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
