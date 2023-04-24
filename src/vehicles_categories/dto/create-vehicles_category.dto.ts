//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateVehiclesCategoryDto {
  @ApiProperty({
    description: 'Name',
    example: 'SUV',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description',
    example: 'Carro SUV é para toda a familia...',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'thumb',
    example: 'URL thumb',
    type: String,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  thumb: string;
}
