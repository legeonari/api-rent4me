//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

//Dto
import { CreateVehiclesStoresContentDto } from 'src/vehicles_stores_contents/dto/create-vehicles_stores_content.dto';

export class CreateVehiclesStoreDto {
  @ApiProperty({
    description: 'Title Stores',
    example: 'Bancos',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Thumb Stores',
    example: 'URL IMAGE',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  thumb: string;

  @ApiProperty({
    description: 'Status Stores',
    example: true,
    default: true,
    type: Boolean,
  })
  @IsOptional()
  @IsBoolean()
  status: boolean;

  @ApiProperty({
    description: 'Stores content',
    type: [CreateVehiclesStoresContentDto],
  })
  @IsNotEmpty()
  contents: [CreateVehiclesStoresContentDto];
}
