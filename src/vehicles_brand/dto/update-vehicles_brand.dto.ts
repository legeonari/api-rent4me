import { PartialType } from '@nestjs/swagger';
import { CreateVehiclesBrandDto } from './create-vehicles_brand.dto';

export class UpdateVehiclesBrandDto extends PartialType(CreateVehiclesBrandDto) {}
