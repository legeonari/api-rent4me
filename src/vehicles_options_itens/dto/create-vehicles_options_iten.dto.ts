//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVehiclesOptionsItenDto {
  @ApiProperty({
    description: 'Name',
    example: 'Teto solar',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Icon',
    example: 'icon',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  icon: string;
}
