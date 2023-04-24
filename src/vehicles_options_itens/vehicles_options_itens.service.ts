//Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dtos
import { CreateVehiclesOptionsItenDto } from './dto/create-vehicles_options_iten.dto';
import { UpdateVehiclesOptionsItenDto } from './dto/update-vehicles_options_iten.dto';

//Entity
import { VehiclesOptionsIten } from './entities/vehicles_options_item.entity';

@Injectable()
export class VehiclesOptionsItensService {
  constructor(
    @InjectModel(VehiclesOptionsIten)
    private vehiclesOptionsIten: typeof VehiclesOptionsIten,
  ) {}

  create(createVehiclesOptionsItenDto: [CreateVehiclesOptionsItenDto]) {
    try {
      return this.vehiclesOptionsIten.bulkCreate(createVehiclesOptionsItenDto);
    } catch (e) {
      return e;
    }
  }

  findAll() {
    try {
      return this.vehiclesOptionsIten.findAll();
    } catch (e) {
      return e;
    }
  }

  findOne(id: string) {
    try {
      return this.vehiclesOptionsIten.findOne({
        where: {
          id: id,
        },
      });
    } catch (e) {
      return e;
    }
  }
}
