//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateVehiclesItemDto {
  @ApiProperty({
    description: 'Id Optional item',
    example: 'c3da61e1-2855-4bb1-9ed1-94d563a319a3',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  vehicleOptionItemId: string;

  @ApiProperty({
    description: 'Destak item',
    example: false,
    type: Boolean,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  contrast: boolean;
}
