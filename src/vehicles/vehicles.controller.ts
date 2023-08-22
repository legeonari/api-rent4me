//Dependencies
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';

//Services
import { VehiclesService } from './vehicles.service';

//Dtos
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

//Guards
import { Roles } from 'src/guards/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RoleGuard } from 'src/guards/roles.guards';
import { FilterVehicleDto } from './dto/filter-vehicle.dto';

@ApiTags('Vehicles')
@ApiBearerAuth('Bearer')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Roles('admin')
  @ApiOperation({
    summary: 'Create vehicle',
    description: 'Create new vehicle',
  })
  @ApiBody({ type: CreateVehicleDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get('relaption/:vehicleCategoryId/:notIdVehicle')
  @ApiOperation({
    summary: 'Get vehicle Relaptions by Category',
    description: 'List vehicle Relaptions by Category',
  })
  findVehicleCategory(
    @Param('vehicleCategoryId') vehicleCategoryId: string,
    @Param('notIdVehicle') notIdVehicle: string,
  ) {
    return this.vehiclesService.findVehicleCategory(
      vehicleCategoryId,
      notIdVehicle,
    );
  }

  @Get('offers/')
  @ApiOperation({
    summary: 'Get vehicle and offers',
    description: 'List all vehicle and offers',
  })
  @ApiQuery({
    type: FilterVehicleDto,
    required: false,
  })
  findAllVehicleOffers(@Query() filter) {
    return this.vehiclesService.findAllVehicleOffers(filter);
  }

  @Get('list-router')
  @ApiOperation({
    summary: 'Get list vehicle routers',
    description: 'List all routers vehicle',
  })
  findAllListRouter() {
    return this.vehiclesService.findAllListRouter();
  }

  @Get('bests')
  @ApiOperation({
    summary: 'Get list Bests vehicles',
    description: 'List all bests vehicle',
  })
  findAllBests() {
    return this.vehiclesService.findAllBests();
  }

  @Get(':route')
  @ApiOperation({
    summary: 'Get vehicle by router',
    description: 'Vehicle resume',
  })
  findOne(@Param('route') route: string) {
    return this.vehiclesService.findOne(route);
  }

  @Get()
  @ApiOperation({
    summary: 'Get list vehicle routers',
    description: 'List all routers vehicle',
  })
  @ApiQuery({
    type: FilterVehicleDto,
    required: false,
  })
  findAll(@Query() filter) {
    return this.vehiclesService.findAll(filter);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(+id);
  }
}
