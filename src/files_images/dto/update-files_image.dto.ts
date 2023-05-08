import { PartialType } from '@nestjs/swagger';
import { CreateFilesImageDto } from './create-files_image.dto';

export class UpdateFilesImageDto extends PartialType(CreateFilesImageDto) {}
