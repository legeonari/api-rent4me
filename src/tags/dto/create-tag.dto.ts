//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    description: 'Tag',
    example: 'Finalizado',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  tag: string;

  @ApiProperty({
    description: 'Color',
    example: '#f2f2f2',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    description: 'Type',
    example: 'tag',
    enum: ['tag', 'status'],
    isArray: false,
  })
  @IsNotEmpty()
  @IsEnum(['tag', 'status'])
  type: string;

  @ApiProperty({
    description: 'Color',
    example: '#f2f2f2',
    type: String,
    default: true,
  })
  @IsString()
  @IsOptional()
  idTagExternal: string;
}
