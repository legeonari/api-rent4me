//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Name',
    example: 'Edwin Reule',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'UserLevelId',
    example: '695eda98-ca9b-465d-b539-13495Aa1dad2',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  userLevelId: string;

  @ApiProperty({
    description: 'E-mail',
    example: 'edwin.reule@rent4me.com.br',
    type: String,
  })
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty({
    description: 'Phone',
    example: '5511966207449',
    type: String,
  })
  @IsNumber()
  @IsNotEmpty()
  phone: string;
}
