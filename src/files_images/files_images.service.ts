//Dependencies
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

//Dto
import { CreateFilesImageDto } from './dto/create-files_image.dto';

//Entity
import { FilesImage } from './entities/files_image.entity';

@Injectable()
export class FilesImagesService {
  constructor(
    @InjectModel(FilesImage)
    private FilesImageModel: typeof FilesImage,
  ) {}

  create(createFilesImageDto: CreateFilesImageDto) {
    try {
      return this.FilesImageModel.create(createFilesImageDto);
    } catch (e) {
      return e;
    }
  }
}
