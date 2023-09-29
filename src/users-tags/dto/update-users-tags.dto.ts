import { PartialType } from '@nestjs/swagger';
import { CreateUsersStatusDto } from './create-users-tags.dto';

export class UpdateUsersStatusDto extends PartialType(CreateUsersStatusDto) {}
