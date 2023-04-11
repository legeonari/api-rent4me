import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehiclesOptionsItensService } from './vehicles_options_itens.service';
import { CreateVehiclesOptionsItenDto } from './dto/create-vehicles_options_iten.dto';
import { UpdateVehiclesOptionsItenDto } from './dto/update-vehicles_options_iten.dto';

@Controller('vehicles-options-itens')
export class VehiclesOptionsItensController {
  constructor(private readonly vehiclesOptionsItensService: VehiclesOptionsItensService) {}

  @Post()
  create(@Body() createVehiclesOptionsItenDto: CreateVehiclesOptionsItenDto) {
    return this.vehiclesOptionsItensService.create(createVehiclesOptionsItenDto);
  }

  @Get()
  findAll() {
    return this.vehiclesOptionsItensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesOptionsItensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehiclesOptionsItenDto: UpdateVehiclesOptionsItenDto) {
    return this.vehiclesOptionsItensService.update(+id, updateVehiclesOptionsItenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesOptionsItensService.remove(+id);
  }
}
