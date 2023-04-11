import { Test, TestingModule } from '@nestjs/testing';
import { UsersDetailssService } from './users-details.service';

describe('UsersDetailssService', () => {
  let service: UsersDetailssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersDetailssService],
    }).compile();

    service = module.get<UsersDetailssService>(UsersDetailssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
