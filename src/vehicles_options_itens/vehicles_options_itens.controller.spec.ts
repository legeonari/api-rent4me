import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesOptionsItensController } from './vehicles_options_itens.controller';
import { VehiclesOptionsItensService } from './vehicles_options_itens.service';

describe('VehiclesOptionsItensController', () => {
  let controller: VehiclesOptionsItensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesOptionsItensController],
      providers: [VehiclesOptionsItensService],
    }).compile();

    controller = module.get<VehiclesOptionsItensController>(VehiclesOptionsItensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
