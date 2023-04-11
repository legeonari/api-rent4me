import { Test, TestingModule } from '@nestjs/testing';
import { UsersContractsController } from './users-contracts.controller';
import { UsersContractsService } from './users-contracts.service';

describe('UsersContractsController', () => {
  let controller: UsersContractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersContractsController],
      providers: [UsersContractsService],
    }).compile();

    controller = module.get<UsersContractsController>(UsersContractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
