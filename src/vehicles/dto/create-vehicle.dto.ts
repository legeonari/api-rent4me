//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

//Dtos
import { CreateVehiclesDimensionDto } from 'src/vehicles_dimensions/dto/create-vehicles_dimension.dto';
import { CreateVehiclesGalleryDto } from 'src/vehicles_gallery/dto/create-vehicles_gallery.dto';
import { CreateVehiclesItemDto } from 'src/vehicles_itens/dto/create-vehicles_iten.dto';
import { CreateVehiclesMotorDto } from 'src/vehicles_motor/dto/create-vehicles_motor.dto';
import { CreateVehiclesStoreDto } from 'src/vehicles_stores/dto/create-vehicles_store.dto';

export class CreateVehicleDto {
  @ApiProperty({
    description: 'Id Vehicle Category',
    example: 'c3da61e1-2855-4bb1-9ed1-94d563a319a3',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  vehicleCategoryId: string;

  @ApiProperty({
    description: 'Id Vehicle brand',
    example: 'c3da61e1-2855-4bb1-9ed1-94d563a319a3',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  vehicleBrandId: string;

  @ApiProperty({
    description: 'Name car',
    example: 'Celta',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Name car',
    example: 'Hatch - Automático',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  subtitle: string;

  @ApiProperty({
    description: 'Tags car',
    example: 'calta, carro hatch, carro para famiília, carro econômico',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  tags: string;

  @ApiProperty({
    description: 'About car',
    example: 'O celta foi o carro eleito o carro mais ecônomico do Brasil...',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  about: string;

  @ApiProperty({
    description: 'Cover car',
    example: 'URL image',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  thumb: string;

  @ApiProperty({
    description: 'Status list car',
    example: true,
    default: true,
    type: Boolean,
  })
  @IsOptional()
  @IsBoolean()
  status: boolean;

  @ApiProperty({
    description: 'Dimmension car',
    type: CreateVehiclesDimensionDto,
  })
  @IsNotEmpty()
  dimmension: CreateVehiclesDimensionDto;

  @ApiProperty({
    description: 'Motor car',
    type: CreateVehiclesMotorDto,
  })
  @IsNotEmpty()
  motor: CreateVehiclesMotorDto;

  @ApiProperty({
    description: 'Itens car',
    type: [CreateVehiclesItemDto],
  })
  @IsNotEmpty()
  items: [CreateVehiclesItemDto];

  @ApiProperty({
    description: 'Stores car',
    type: [CreateVehiclesStoreDto],
  })
  @IsNotEmpty()
  stores: [CreateVehiclesStoreDto];

  @ApiProperty({
    description: 'Gallery images car',
    type: [CreateVehiclesGalleryDto],
  })
  @IsNotEmpty()
  galleries: [CreateVehiclesGalleryDto];
}
