//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateVehiclesDimensionDto {
  @ApiProperty({
    description: 'Height vehicle',
    example: 1.645,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  height: number;

  @ApiProperty({
    description: 'Width vehicle',
    example: 1.83,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  width: number;

  @ApiProperty({
    description: 'Length vehicle',
    example: 4.338,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  length: number;

  @ApiProperty({
    description: 'Weight vehicle',
    example: 1.452,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  weight: number;

  @ApiProperty({
    description: 'Tank size vehicle',
    example: 51,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  tank: number;

  @ApiProperty({
    description: 'Axle distance vehicle',
    example: 2.63,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  axleDistance: number;

  @ApiProperty({
    description: 'Capacity trunk vehicle',
    example: 340,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  trunk: number;

  @ApiProperty({
    description: 'Count occupants vehicle',
    example: 5,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  occupants: number;
}
