import { Injectable } from '@nestjs/common';
import { CreateVehiclesOptionsItenDto } from './dto/create-vehicles_options_iten.dto';
import { UpdateVehiclesOptionsItenDto } from './dto/update-vehicles_options_iten.dto';

@Injectable()
export class VehiclesOptionsItensService {
  create(createVehiclesOptionsItenDto: CreateVehiclesOptionsItenDto) {
    return 'This action adds a new vehiclesOptionsIten';
  }

  findAll() {
    return `This action returns all vehiclesOptionsItens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiclesOptionsIten`;
  }

  update(id: number, updateVehiclesOptionsItenDto: UpdateVehiclesOptionsItenDto) {
    return `This action updates a #${id} vehiclesOptionsIten`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiclesOptionsIten`;
  }
}
