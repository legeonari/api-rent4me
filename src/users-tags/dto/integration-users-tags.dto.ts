//Dependencies
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsObject } from 'class-validator';

//Dto
import { ContactDto } from 'src/umbler_talk_whatsapp/dto/webhook.dto';

export class IntegrationUsersStatusDto {
  @ApiProperty()
  @IsObject()
  user: ContactDto;
  open: boolean;
  closedAtUTC: string;
}
