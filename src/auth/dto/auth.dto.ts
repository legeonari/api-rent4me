import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'E-mail user',
    type: String,
    example: 'edwinreule@gmail.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Password user',
    type: String,
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
