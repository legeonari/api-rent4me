//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreatePartnerDto {
  @ApiProperty({
    description: 'Name',
    example: 'Porto Seguro',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Name product',
    example: 'Carro fácil',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  productName: string;

  @ApiProperty({
    description: 'CNPJ',
    example: '',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @ApiProperty({
    description: 'Logo',
    example: '',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  logo: string;

  @ApiProperty({
    description: 'Site',
    example: 'https://google.com.br',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  site: string;

  @ApiProperty({
    description: 'Primary Color',
    example: '#FFFFFF',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  primaryColor: string;

  @ApiProperty({
    description: 'Secundary Color',
    example: '#000000',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  secondaryColor: string;
}
