//Modules
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

//Controller
import { VehiclesGalleryController } from './vehicles_gallery.controller';

//Sevices
import { VehiclesGalleryService } from './vehicles_gallery.service';

//Gallery
import { VehiclesGallery } from './entities/vehicles_gallery.entity';

@Module({
  imports: [SequelizeModule.forFeature([VehiclesGallery])],
  controllers: [VehiclesGalleryController],
  providers: [VehiclesGalleryService],
})
export class VehiclesGalleryModule {}
