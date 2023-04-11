//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

//Dto
import { CreateUserInterestLeadDto } from 'src/users-interest/dto/create-user-interest-lead.dto';

export class CreateUserLeadDto {
  @ApiProperty({
    description: 'Name',
    example: 'Edwin Reule',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'E-mail',
    example: 'edwin.reule@rent4me.com.br',
    type: String,
  })
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty({
    description: 'ID Contact Umbler',
    example: '16dkLKjd13',
    type: String,
  })
  @IsString()
  @IsOptional()
  idContactUtalk: string;

  @ApiProperty({
    description: 'Thumb profile',
    example: 'https://rent4me.com.br/xpto.jpg',
    type: String,
  })
  @IsString()
  @IsOptional()
  thumb: string;

  @ApiProperty({
    description: 'Phone',
    example: '5511966207449',
    type: String,
  })
  @IsNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'interest',
    type: [CreateUserInterestLeadDto],
  })
  @IsNumber()
  @IsNotEmpty()
  interest;
}
