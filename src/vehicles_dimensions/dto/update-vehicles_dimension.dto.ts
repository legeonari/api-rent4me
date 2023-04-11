import { PartialType } from '@nestjs/swagger';
import { CreateVehiclesDimensionDto } from './create-vehicles_dimension.dto';

export class UpdateVehiclesDimensionDto extends PartialType(CreateVehiclesDimensionDto) {}
