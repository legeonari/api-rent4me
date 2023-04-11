import { PartialType } from '@nestjs/swagger';
import { CreateUsersDetailsDto } from './create-users-detail.dto';

export class UpdateUsersDetailsDto extends PartialType(CreateUsersDetailsDto) {}
