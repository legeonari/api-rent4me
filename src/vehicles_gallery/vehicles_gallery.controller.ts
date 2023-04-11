import { Controller } from '@nestjs/common';
import { VehiclesGalleryService } from './vehicles_gallery.service';

@Controller('vehicles-gallery')
export class VehiclesGalleryController {
  constructor(
    private readonly vehiclesGalleryService: VehiclesGalleryService,
  ) {}
}
