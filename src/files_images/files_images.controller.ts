//Dependencies
import { Controller, Get, Post, Body } from '@nestjs/common';

//Serives
import { FilesImagesService } from './files_images.service';

//Dto
import { CreateFilesImageDto } from './dto/create-files_image.dto';

@Controller('files-images')
export class FilesImagesController {
  constructor(private readonly filesImagesService: FilesImagesService) {}

  @Post()
  create(@Body() createFilesImageDto: CreateFilesImageDto) {
    return this.filesImagesService.create(createFilesImageDto);
  }
}
