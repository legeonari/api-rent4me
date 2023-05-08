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
    description: 'Image size 65x65',
    example: 'URL',
    type: String,
  })
  @IsOptional()
  size65x65: string;

  @ApiProperty({
    description: 'Image size 450x300',
    example: 'URL',
    type: String,
  })
  @IsOptional()
  size450x300: string;

  @ApiProperty({
    description: 'Image size 1080x1800',
    example: 'URL',
    type: String,
  })
  @IsOptional()
  size1080x1800: string;

  @ApiProperty({
    description: 'Image size 450x270',
    example: 'URL',
    type: String,
  })
  @IsOptional()
  size450x270: string;
}
