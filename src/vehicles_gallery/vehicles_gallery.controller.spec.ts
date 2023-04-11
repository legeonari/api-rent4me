import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesGalleryController } from './vehicles_gallery.controller';
import { VehiclesGalleryService } from './vehicles_gallery.service';

describe('VehiclesGalleryController', () => {
  let controller: VehiclesGalleryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesGalleryController],
      providers: [VehiclesGalleryService],
    }).compile();

    controller = module.get<VehiclesGalleryController>(VehiclesGalleryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
