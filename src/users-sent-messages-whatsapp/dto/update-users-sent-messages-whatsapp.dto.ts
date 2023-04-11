import { PartialType } from '@nestjs/swagger';
import { CreateUsersSentMessagesWhatsappDto } from './create-users-sent-messages-whatsapp.dto';

export class UpdateUsersSentMessagesWhatsappDto extends PartialType(CreateUsersSentMessagesWhatsappDto) {}
