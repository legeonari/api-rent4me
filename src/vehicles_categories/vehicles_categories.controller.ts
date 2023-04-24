//Dependencies
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';

//Services
import { VehiclesCategoriesService } from './vehicles_categories.service';

//Dtos
import { CreateVehiclesCategoryDto } from './dto/create-vehicles_category.dto';

//Guards
import { Roles } from 'src/guards/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/roles.guards';

@ApiTags('Vehicle Categories')
@ApiBearerAuth('Bearer')
@Controller('vehicles-categories')
export class VehiclesCategoriesController {
  constructor(
    private readonly vehiclesCategoriesService: VehiclesCategoriesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @ApiOperation({
    summary: 'Create categorie vehicle',
    description: 'Service Created categories vehicles',
  })
  @ApiBody({ type: CreateVehiclesCategoryDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createVehiclesCategoryDto: CreateVehiclesCategoryDto) {
    return this.vehiclesCategoriesService.create(createVehiclesCategoryDto);
  }

  @Get()
  findAll() {
    return this.vehiclesCategoriesService.findAll();
  }
}
