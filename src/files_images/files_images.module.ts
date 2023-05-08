//Dependencies
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { FilesImagesService } from './files_images.service';

//Controller
import { FilesImagesController } from './files_images.controller';

//Entity
import { FilesImage } from './entities/files_image.entity';

@Module({
  imports: [SequelizeModule.forFeature([FilesImage])],
  controllers: [FilesImagesController],
  providers: [FilesImagesService],
  exports: [FilesImagesService],
})
export class FilesImagesModule {}
