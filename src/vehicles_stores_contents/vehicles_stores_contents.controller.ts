import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehiclesStoresContentsService } from './vehicles_stores_contents.service';
import { CreateVehiclesStoresContentDto } from './dto/create-vehicles_stores_content.dto';
import { UpdateVehiclesStoresContentDto } from './dto/update-vehicles_stores_content.dto';

@Controller('vehicles-stores-contents')
export class VehiclesStoresContentsController {
  constructor(private readonly vehiclesStoresContentsService: VehiclesStoresContentsService) {}

  @Post()
  create(@Body() createVehiclesStoresContentDto: CreateVehiclesStoresContentDto) {
    return this.vehiclesStoresContentsService.create(createVehiclesStoresContentDto);
  }

  @Get()
  findAll() {
    return this.vehiclesStoresContentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesStoresContentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehiclesStoresContentDto: UpdateVehiclesStoresContentDto) {
    return this.vehiclesStoresContentsService.update(+id, updateVehiclesStoresContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesStoresContentsService.remove(+id);
  }
}
