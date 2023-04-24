//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVehiclesBrandDto {
  @ApiProperty({
    description: 'Name',
    example: 'Chevrolet',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description',
    example: 'A Chevrolet...',
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
