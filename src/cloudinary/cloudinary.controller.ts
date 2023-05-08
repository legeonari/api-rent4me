//Dependencies
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

//Services
import { CloudinaryService } from './cloudinary.service';
import { CreateCloudinaryDto } from './dto/create-cloudinary.dto';

@ApiTags('Files')
@ApiBearerAuth('Bearer')
@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('/upload')
  @ApiOperation({
    summary: 'Upload image to Cloudnary',
    description: 'Upload image to Cloudnary',
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({
    description: 'Upload image to Cloudnary',
    type: CreateCloudinaryDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@UploadedFile() file) {
    return this.cloudinaryService.create(file);
  }
}
