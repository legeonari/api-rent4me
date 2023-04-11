import { Test, TestingModule } from '@nestjs/testing';
import { UsersInterestService } from './users-interest.service';

describe('UsersInterestService', () => {
  let service: UsersInterestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersInterestService],
    }).compile();

    service = module.get<UsersInterestService>(UsersInterestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
