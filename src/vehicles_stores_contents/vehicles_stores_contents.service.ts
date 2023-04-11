import { Injectable } from '@nestjs/common';
import { CreateVehiclesStoresContentDto } from './dto/create-vehicles_stores_content.dto';
import { UpdateVehiclesStoresContentDto } from './dto/update-vehicles_stores_content.dto';

@Injectable()
export class VehiclesStoresContentsService {
  create(createVehiclesStoresContentDto: CreateVehiclesStoresContentDto) {
    return 'This action adds a new vehiclesStoresContent';
  }

  findAll() {
    return `This action returns all vehiclesStoresContents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiclesStoresContent`;
  }

  update(id: number, updateVehiclesStoresContentDto: UpdateVehiclesStoresContentDto) {
    return `This action updates a #${id} vehiclesStoresContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiclesStoresContent`;
  }
}
