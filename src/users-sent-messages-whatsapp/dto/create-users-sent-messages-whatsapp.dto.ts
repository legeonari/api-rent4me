//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';


export class CreateUsersSentMessagesWhatsappDto {
  @ApiProperty({
    description: 'UserId',
    example: 'c3da61e1-2855-4bb1-9ed1-94d563a319a3',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: 'ID Contact Umbler',
    example: '16dkLKjd13',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  idContactUtalk: string;

  @ApiProperty({
    description: 'TemlateID Utalk Template',
    example: '1234abcd5678EFGH',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  template: string;

  @ApiProperty({
    description: 'Message Custom',
    example: 'Olá, Edwin',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({
    description: 'Message Custom',
    example: 'Usuário gostou do carro XYZ',
    type: String,
  })
  @IsString()
  @IsOptional()
  note?: string;
}
