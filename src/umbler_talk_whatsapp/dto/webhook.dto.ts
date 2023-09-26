import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsArray,
  IsObject,
  IsOptional,
} from 'class-validator';

export class OrganizationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Id: string;
}

export class ContactDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly LastActiveUTC: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly ProfilePictureUrl?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly PhoneNumber: string;

  @ApiProperty()
  @IsBoolean()
  readonly IsOptIn: boolean;

  @ApiProperty()
  @IsBoolean()
  readonly IsBlocked: boolean;

  @ApiProperty()
  @IsArray()
  readonly ScheduledMessages: any[];

  @ApiProperty()
  @IsArray()
  readonly Tags: TagDto[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Id: string;
}

export class TagDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Id: string;
}

export class ChannelDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly PhoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly AppName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly AppId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly ChannelType: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Platform: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly State: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Id: string;
}

export class SectorDto {
  @ApiProperty()
  @IsBoolean()
  readonly Default: boolean;

  @ApiProperty()
  @IsNumber()
  readonly Order: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Id: string;
}

export class LastMessageDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Content: string;

  @ApiProperty()
  @IsArray()
  readonly Contacts: any[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly MessageType: string;

  @ApiProperty()
  @IsBoolean()
  readonly IsPrivate: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Source: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly MessageState: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly EventAtUTC: string;

  @ApiProperty()
  @IsObject()
  readonly Chat: any;

  @ApiProperty()
  @IsArray()
  readonly Buttons: any[];

  @ApiProperty()
  @IsObject()
  readonly BotInstance: any;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly CreatedAtUTC: string;
}

export class Content {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Type: string;

  @ApiProperty()
  @IsObject()
  readonly Content: {
    Organization: OrganizationDto;
    Contact: ContactDto;
    Channel: ChannelDto;
    Sector: SectorDto;
    OrganizationMembers: any[];
    Tags: TagDto[];
    LastMessage: LastMessageDto;
    Open: boolean;
    Private: boolean;
    Waiting: boolean;
    Unread: string[];
    EventAtUTC: string;
    Id: string;
    CreatedAtUTC: string;
  };
}

export class WebhookDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly Type: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly EventDate: string;

  @ApiProperty()
  @IsObject()
  readonly Payload: Content;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly EventId: string;
}
