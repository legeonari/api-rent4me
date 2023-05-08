//Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dtos
import { CreateVehiclesCategoryDto } from './dto/create-vehicles_category.dto';

//Entity
import { VehiclesCategory } from './entities/vehicles_category.entity';

@Injectable()
export class VehiclesCategoriesService {
  constructor(
    @InjectModel(VehiclesCategory)
    private vehiclesCategory: typeof VehiclesCategory,
  ) {}

  create(createVehiclesCategoryDto: CreateVehiclesCategoryDto) {
    try {
      return this.vehiclesCategory.create(createVehiclesCategoryDto);
    } catch (e) {
      return e;
    }
  }

  findAll() {
    try {
      return this.vehiclesCategory.findAll();
    } catch (e) {
      return e;
    }
  }
}
