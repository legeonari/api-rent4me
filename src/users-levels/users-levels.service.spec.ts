import { Test, TestingModule } from '@nestjs/testing';
import { UsersLevelsService } from './users-levels.service';

describe('UsersLevelsService', () => {
  let service: UsersLevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersLevelsService],
    }).compile();

    service = module.get<UsersLevelsService>(UsersLevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
