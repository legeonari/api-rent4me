//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

//Dto
import { CreateOffersDetailDto } from 'src/offers_details/dto/create-offers_detail.dto';
import { CreateOffersPromotionDto } from 'src/offers_promotion/dto/create-offers_promotion.dto';

export class CreateOfferDto {
  @ApiProperty({
    description: 'vehicleId',
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
    description: 'Status',
    example: true,
    type: String,
    default: true,
  })
  @IsString()
  @IsNotEmpty()
  status: boolean;

  @ApiProperty({
    description: 'Offers details',
    type: [CreateOffersDetailDto],
  })
  offersDetail;

  @ApiProperty({
    description: 'Promotions',
    type: CreateOffersPromotionDto,
  })
  @IsString()
  @IsNotEmpty()
  offersPromotion: CreateOffersPromotionDto;
}
