import { Test, TestingModule } from '@nestjs/testing';
import { UsersLevelsController } from './users-levels.controller';
import { UsersLevelsService } from './users-levels.service';

describe('UsersLevelsController', () => {
  let controller: UsersLevelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersLevelsController],
      providers: [UsersLevelsService],
    }).compile();

    controller = module.get<UsersLevelsController>(UsersLevelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
