import { Injectable } from '@nestjs/common';
import { CreateVehiclesCategoryDto } from './dto/create-vehicles_category.dto';
import { UpdateVehiclesCategoryDto } from './dto/update-vehicles_category.dto';

@Injectable()
export class VehiclesCategoriesService {
  create(createVehiclesCategoryDto: CreateVehiclesCategoryDto) {
    return 'This action adds a new vehiclesCategory';
  }

  findAll() {
    return `This action returns all vehiclesCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiclesCategory`;
  }

  update(id: number, updateVehiclesCategoryDto: UpdateVehiclesCategoryDto) {
    return `This action updates a #${id} vehiclesCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiclesCategory`;
  }
}
