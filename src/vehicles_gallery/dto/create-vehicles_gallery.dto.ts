//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateVehiclesGalleryDto {
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
