import { PartialType } from '@nestjs/swagger';
import { CreateVehiclesOptionsItenDto } from './create-vehicles_options_iten.dto';

export class UpdateVehiclesOptionsItenDto extends PartialType(CreateVehiclesOptionsItenDto) {}
