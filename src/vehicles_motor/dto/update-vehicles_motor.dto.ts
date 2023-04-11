import { PartialType } from '@nestjs/swagger';
import { CreateVehiclesMotorDto } from './create-vehicles_motor.dto';

export class UpdateVehiclesMotorDto extends PartialType(CreateVehiclesMotorDto) {}
