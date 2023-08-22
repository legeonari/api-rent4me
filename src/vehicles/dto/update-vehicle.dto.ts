//Dependencies
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

//Dtos
import { CreateVehicleDto } from './create-vehicle.dto';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {
  @ApiProperty({
    description: 'Id Vehicle',
    example: 'c3da61e1-2855-4bb1-9ed1-94d563a319a3',
    type: String,
  })
  @IsOptional()
  @IsString()
  id: string;
}
