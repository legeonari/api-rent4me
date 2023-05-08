//Dependencies
import { ApiProperty } from '@nestjs/swagger';

export class FilterVehicleDto {
  @ApiProperty({
    example: 'Argo',
    type: String,
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 0,
    type: String,
    required: false,
  })
  page?: string;

  @ApiProperty({
    example: 15,
    type: String,
    required: false,
  })
  limit?: string;
}
