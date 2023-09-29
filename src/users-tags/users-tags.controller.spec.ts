import { Test, TestingModule } from '@nestjs/testing';
import { UsersTagsController } from './users-tags.controller';
import { UsersTagsService } from './users-tags.service';

describe('UsersTagsController', () => {
  let controller: UsersTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersTagsController],
      providers: [UsersTagsService],
    }).compile();

    controller = module.get<UsersTagsController>(UsersTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
