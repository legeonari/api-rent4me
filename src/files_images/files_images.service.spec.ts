import { Test, TestingModule } from '@nestjs/testing';
import { FilesImagesService } from './files_images.service';

describe('FilesImagesService', () => {
  let service: FilesImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilesImagesService],
    }).compile();

    service = module.get<FilesImagesService>(FilesImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
