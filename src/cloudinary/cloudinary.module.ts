//Dependencies
import { Module } from '@nestjs/common';

//Serives
import { CloudinaryService } from './cloudinary.service';

//Controller
import { CloudinaryController } from './cloudinary.controller';

//Provides
import { CloudinaryProvider } from './cloudinary.provider';

//modules
import { FilesImagesModule } from 'src/files_images/files_images.module';

@Module({
  imports: [FilesImagesModule],
  controllers: [CloudinaryController],
  providers: [CloudinaryService, CloudinaryProvider],
  exports: [CloudinaryProvider],
})
export class CloudinaryModule {}
