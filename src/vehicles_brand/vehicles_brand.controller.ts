//Dependencies
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';

//Services
import { VehiclesBrandService } from './vehicles_brand.service';

//Dto
import { CreateVehiclesBrandDto } from './dto/create-vehicles_brand.dto';

//Guards
import { Roles } from 'src/guards/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/roles.guards';

@ApiTags('Vehicle Brands')
@ApiBearerAuth('Bearer')
@Controller('vehicles-brand')
export class VehiclesBrandController {
  constructor(private readonly vehiclesBrandService: VehiclesBrandService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @ApiOperation({
    summary: 'Create brands vehicle',
    description: 'Service Created brands vehicles',
  })
  @ApiBody({ type: CreateVehiclesBrandDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createVehiclesBrandDto: CreateVehiclesBrandDto) {
    return this.vehiclesBrandService.create(createVehiclesBrandDto);
  }

  @Get()
  findAll() {
    return this.vehiclesBrandService.findAll();
  }
}
