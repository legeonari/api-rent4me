import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'ID Contact Umbler',
    example: '16dkLKjd13',
    type: String,
  })
  @IsString()
  @IsOptional()
  idContactUtalk: string;
}
