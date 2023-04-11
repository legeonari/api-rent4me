import { Test, TestingModule } from '@nestjs/testing';
import { UsersInterestController } from './users-interest.controller';
import { UsersInterestService } from './users-interest.service';

describe('UsersInterestController', () => {
  let controller: UsersInterestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersInterestController],
      providers: [UsersInterestService],
    }).compile();

    controller = module.get<UsersInterestController>(UsersInterestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
