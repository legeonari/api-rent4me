import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesItemsController } from './vehicles_itens.controller';
import { VehiclesItemsService } from './vehicles_itens.service';

describe('VehiclesItemsController', () => {
  let controller: VehiclesItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesItemsController],
      providers: [VehiclesItemsService],
    }).compile();

    controller = module.get<VehiclesItemsController>(VehiclesItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
