import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesOptionsItensService } from './vehicles_options_itens.service';

describe('VehiclesOptionsItensService', () => {
  let service: VehiclesOptionsItensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesOptionsItensService],
    }).compile();

    service = module.get<VehiclesOptionsItensService>(VehiclesOptionsItensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
