//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateVehiclesGalleryDto {
  @ApiProperty({
    description: 'Id Vehicle',
    example: 'c3da61e1-2855-4bb1-9ed1-94d563a319a3',
    type: String,
  })
  @IsOptional()
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Title',
    example: 'Tiggo 5x frente',
    type: String,
  })
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Description details',
    example: 'Frente tiggo 5x Turbo cinza',
    type: String,
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Image or Video store',
    example: 'URL FILE',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  file: string;

  @ApiProperty({
    description: 'Status store content',
    example: true,
    default: true,
    type: Boolean,
  })
  @IsOptional()
  @IsBoolean()
  status: boolean;
}
