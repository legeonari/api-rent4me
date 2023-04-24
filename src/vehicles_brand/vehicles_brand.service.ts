//Dependencies
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

//Dtos
import { CreateVehiclesBrandDto } from './dto/create-vehicles_brand.dto';
import { UpdateVehiclesBrandDto } from './dto/update-vehicles_brand.dto';

//Entity
import { VehiclesBrand } from './entities/vehicles_brand.entity';

@Injectable()
export class VehiclesBrandService {
  constructor(
    @InjectModel(VehiclesBrand)
    private vehiclesBrand: typeof VehiclesBrand,
  ) {}

  create(createVehiclesBrandDto: CreateVehiclesBrandDto) {
    try {
      return this.vehiclesBrand.create(createVehiclesBrandDto);
    } catch (e) {
      return e;
    }
  }

  findAll() {
    return `This action returns all vehiclesBrand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiclesBrand`;
  }

  update(id: number, updateVehiclesBrandDto: UpdateVehiclesBrandDto) {
    return `This action updates a #${id} vehiclesBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiclesBrand`;
  }
}
