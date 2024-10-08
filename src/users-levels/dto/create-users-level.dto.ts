//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateUsersLevelDto {
  @ApiProperty({
    description: 'Name',
    example: 'Administrador',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description',
    example: 'Nivle de acesso máximo',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Perfil public',
    example: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  public: boolean;
}
