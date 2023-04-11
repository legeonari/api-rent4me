//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsOptional,
  IsEnum,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateUserInterestLeadDto {
  @ApiProperty({
    description: 'userId',
    example: 'e6fbdec6-cc0c-11ed-afa1-0242ac120003',
    type: String,
  })
  @IsNotEmpty()
  @IsUUID(4)
  usedId: string;

  @ApiProperty({
    description: 'vehicleId',
    example: 'e6fbdec6-cc0c-11ed-afa1-0242ac120003',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  vehicleId: string;

  @ApiProperty({
    description: 'Period',
    example: 12,
    type: String,
  })
  @IsNumber()
  @IsOptional()
  period: number;

  @ApiProperty({
    description: 'Mileage',
    example: '1000',
    type: String,
  })
  @IsString()
  @IsOptional()
  mileage: string;

  @ApiProperty({
    description: 'PRice',
    example: '1000.00',
    type: String,
  })
  @IsString()
  @IsOptional()
  price: string;

  @ApiProperty({
    description: 'Type',
    example: 'view',
    type: String,
  })
  @IsEnum(['view', 'solicitation'])
  @IsOptional()
  type: string;

  @ApiProperty({
    description: 'Date start post',
    type: Date,
    default: new Date(),
  })
  @IsDateString()
  @IsOptional()
  startTimeView?: Date;

  @ApiProperty({
    description: 'Date start post',
    type: Date,
    default: new Date(),
  })
  @IsDateString()
  @IsOptional()
  finishTimeView?: Date;
}
