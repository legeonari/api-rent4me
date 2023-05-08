//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateOffersDetailDto {
  @ApiProperty({
    description: 'offerId',
    example: '695eda98-ca9b-465d-b539-13495Aa1dad2',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  vehicleId: string;

  @ApiProperty({
    description: 'partnerId',
    example: '695eda98-ca9b-465d-b539-13495Aa1dad2',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  partnerId: string;

  @ApiProperty({
    description: 'vehicleCategoryId',
    example: '695eda98-ca9b-465d-b539-13495Aa1dad2',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  vehicleCategoryId: string;

  @ApiProperty({
    description: 'Period contract',
    example: 10,
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  period: number;

  @ApiProperty({
    description: 'Mileage contract',
    example: 1000,
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  mileage: number;

  @ApiProperty({
    description: 'Number contract',
    example: 2000,
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Deadline contract',
    type: Date,
    default: new Date(),
  })
  @IsDateString()
  @IsNotEmpty()
  deadline: string;

  @ApiProperty({
    description: 'Status',
    example: true,
    type: String,
    default: true,
  })
  @IsString()
  @IsNotEmpty()
  status: boolean;
}
