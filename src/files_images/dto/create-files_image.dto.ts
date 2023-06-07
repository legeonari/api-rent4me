//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateFilesImageDto {
  @ApiProperty({
    description: 'Original image',
    example: 'URL',
    type: String,
  })
  @IsOptional()
  original: string;

  @ApiProperty({
    description: 'Format image',
    example: 'png',
    type: String,
  })
  @IsOptional()
  format: string;

  @ApiProperty({
    description: 'Image',
    example: 'URL',
    type: String,
  })
  @IsOptional()
  image: string;

  @ApiProperty({
    description: 'name image',
    example: 'URL',
    type: String,
  })
  @IsOptional()
  name: string;

  @ApiProperty({
    description: 'Base url image',
    example: 'URL',
    type: String,
  })
  @IsOptional()
  baseUrl: string;

  @ApiProperty({
    description: 'Folder url image',
    example: 'URL',
    type: String,
  })
  @IsOptional()
  folder: string;
}
