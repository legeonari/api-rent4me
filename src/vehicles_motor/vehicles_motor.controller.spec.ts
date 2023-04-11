import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesMotorController } from './vehicles_motor.controller';
import { VehiclesMotorService } from './vehicles_motor.service';

describe('VehiclesMotorController', () => {
  let controller: VehiclesMotorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesMotorController],
      providers: [VehiclesMotorService],
    }).compile();

    controller = module.get<VehiclesMotorController>(VehiclesMotorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
