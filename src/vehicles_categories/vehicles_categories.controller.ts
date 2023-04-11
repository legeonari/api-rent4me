import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehiclesCategoriesService } from './vehicles_categories.service';
import { CreateVehiclesCategoryDto } from './dto/create-vehicles_category.dto';
import { UpdateVehiclesCategoryDto } from './dto/update-vehicles_category.dto';

@Controller('vehicles-categories')
export class VehiclesCategoriesController {
  constructor(private readonly vehiclesCategoriesService: VehiclesCategoriesService) {}

  @Post()
  create(@Body() createVehiclesCategoryDto: CreateVehiclesCategoryDto) {
    return this.vehiclesCategoriesService.create(createVehiclesCategoryDto);
  }

  @Get()
  findAll() {
    return this.vehiclesCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehiclesCategoryDto: UpdateVehiclesCategoryDto) {
    return this.vehiclesCategoriesService.update(+id, updateVehiclesCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesCategoriesService.remove(+id);
  }
}
