import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesGalleryService } from './vehicles_gallery.service';

describe('VehiclesGalleryService', () => {
  let service: VehiclesGalleryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesGalleryService],
    }).compile();

    service = module.get<VehiclesGalleryService>(VehiclesGalleryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
