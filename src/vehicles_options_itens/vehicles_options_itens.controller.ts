//Dependencies
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';

//Services
import { VehiclesOptionsItensService } from './vehicles_options_itens.service';

//Dtos
import { CreateVehiclesOptionsItenDto } from './dto/create-vehicles_options_iten.dto';

//Guards
import { Roles } from 'src/guards/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/roles.guards';

@ApiTags('Vehicle Options itens')
// @ApiBearerAuth('Bearer')
@Controller('vehicles-options-itens')
export class VehiclesOptionsItensController {
  constructor(
    private readonly vehiclesOptionsItensService: VehiclesOptionsItensService,
  ) {}

  @Post()
  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Roles('admin')
  @ApiOperation({
    summary: 'Create options vehicle',
    description: 'Service Created options vehicles',
  })
  @ApiBody({ type: CreateVehiclesOptionsItenDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createVehiclesOptionsItenDto: [CreateVehiclesOptionsItenDto]) {
    return this.vehiclesOptionsItensService.create(
      createVehiclesOptionsItenDto,
    );
  }

  @Get()
  findAll() {
    return this.vehiclesOptionsItensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesOptionsItensService.findOne(id);
  }
}
