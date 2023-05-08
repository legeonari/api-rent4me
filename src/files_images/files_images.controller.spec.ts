import { Test, TestingModule } from '@nestjs/testing';
import { FilesImagesController } from './files_images.controller';
import { FilesImagesService } from './files_images.service';

describe('FilesImagesController', () => {
  let controller: FilesImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilesImagesController],
      providers: [FilesImagesService],
    }).compile();

    controller = module.get<FilesImagesController>(FilesImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
