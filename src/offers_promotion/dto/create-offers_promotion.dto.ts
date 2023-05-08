//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateOffersPromotionDto {
  @ApiProperty({
    description: 'offerId',
    example: 'Um mês de combustivel gratis',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  text: string;

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
