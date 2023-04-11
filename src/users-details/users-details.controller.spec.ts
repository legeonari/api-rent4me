import { Test, TestingModule } from '@nestjs/testing';
import { UsersDetailssController } from './users-details.controller';
import { UsersDetailssService } from './users-details.service';

describe('UsersDetailssController', () => {
  let controller: UsersDetailssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersDetailssController],
      providers: [UsersDetailssService],
    }).compile();

    controller = module.get<UsersDetailssController>(UsersDetailssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
