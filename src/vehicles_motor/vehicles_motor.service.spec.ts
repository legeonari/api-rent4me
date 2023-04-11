import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesMotorService } from './vehicles_motor.service';

describe('VehiclesMotorService', () => {
  let service: VehiclesMotorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesMotorService],
    }).compile();

    service = module.get<VehiclesMotorService>(VehiclesMotorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
