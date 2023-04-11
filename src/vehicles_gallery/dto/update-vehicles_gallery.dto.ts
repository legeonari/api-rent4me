import { PartialType } from '@nestjs/swagger';
import { CreateVehiclesGalleryDto } from './create-vehicles_gallery.dto';

export class UpdateVehiclesGalleryDto extends PartialType(CreateVehiclesGalleryDto) {}
