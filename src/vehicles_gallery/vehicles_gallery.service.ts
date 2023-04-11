import { Injectable } from '@nestjs/common';
import { CreateVehiclesGalleryDto } from './dto/create-vehicles_gallery.dto';
import { UpdateVehiclesGalleryDto } from './dto/update-vehicles_gallery.dto';

@Injectable()
export class VehiclesGalleryService {
  create(createVehiclesGalleryDto: CreateVehiclesGalleryDto) {
    return 'This action adds a new vehiclesGallery';
  }

  findAll() {
    return `This action returns all vehiclesGallery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiclesGallery`;
  }

  update(id: number, updateVehiclesGalleryDto: UpdateVehiclesGalleryDto) {
    return `This action updates a #${id} vehiclesGallery`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiclesGallery`;
  }
}
