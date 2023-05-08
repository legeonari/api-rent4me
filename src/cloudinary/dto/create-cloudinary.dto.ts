//Dependencies
import { ApiProperty } from '@nestjs/swagger';

export class CreateCloudinaryDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
