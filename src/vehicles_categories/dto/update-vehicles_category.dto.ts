import { PartialType } from '@nestjs/swagger';
import { CreateVehiclesCategoryDto } from './create-vehicles_category.dto';

export class UpdateVehiclesCategoryDto extends PartialType(CreateVehiclesCategoryDto) {}
