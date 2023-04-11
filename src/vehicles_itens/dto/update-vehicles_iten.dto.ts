import { PartialType } from '@nestjs/swagger';
import { CreateVehiclesItemDto } from './create-vehicles_iten.dto';

export class UpdateVehiclesItemDto extends PartialType(CreateVehiclesItemDto) {}
