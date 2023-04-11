import { Test, TestingModule } from '@nestjs/testing';
import { UsersContractsService } from './users-contracts.service';

describe('UsersContractsService', () => {
  let service: UsersContractsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersContractsService],
    }).compile();

    service = module.get<UsersContractsService>(UsersContractsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
