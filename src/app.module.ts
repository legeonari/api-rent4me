//Dependencies
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';

//Controllers
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';

//Services
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

//Module
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { UsersLevelsModule } from './users-levels/users-levels.module';
import { UsersDetailssModule } from './users-details/users-details.module';
import { UsersInterestModule } from './users-interest/users-interest.module';
import { UsersContractsModule } from './users-contracts/users-contracts.module';
import { UsersSentMessagesWhatsappModule } from './users-sent-messages-whatsapp/users-sent-messages-whatsapp.module';
import { PartnersModule } from './partners/partners.module';
import { VehiclesCategoriesModule } from './vehicles_categories/vehicles_categories.module';
import { VehiclesItemsModule } from './vehicles_itens/vehicles_itens.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VehiclesMotorModule } from './vehicles_motor/vehicles_motor.module';
import { VehiclesDimensionsModule } from './vehicles_dimensions/vehicles_dimensions.module';
import { VehiclesStoresModule } from './vehicles_stores/vehicles_stores.module';
import { VehiclesStoresContentsModule } from './vehicles_stores_contents/vehicles_stores_contents.module';
import { VehiclesOptionsItensModule } from './vehicles_options_itens/vehicles_options_itens.module';
import { OffersModule } from './offers/offers.module';
import { OffersPromotionModule } from './offers_promotion/offers_promotion.module';
import { OffersDetailsModule } from './offers_details/offers_details.module';
import { AuthModule } from './auth/auth.module';

//Guard Ands JWT
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { UmblerTalkWhatsappModule } from './umbler_talk_whatsapp/umbler_talk_whatsapp.module';
import { VehiclesGalleryModule } from './vehicles_gallery/vehicles_gallery.module';
import { VehiclesBrandModule } from './vehicles_brand/vehicles_brand.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { FilesImagesModule } from './files_images/files_images.module';
import { RdStationModule } from './rd-station/rd-station.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      dialectOptions: {
        charset: 'utf8mb4',
      },
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      synchronize: process.env.MODE == 'develop' ? true : false,
      retryAttempts: 10,
      autoLoadModels: true,
    }),
    AuthModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    UsersModule,
    UsersLevelsModule,
    UsersDetailssModule,
    UsersInterestModule,
    UsersContractsModule,
    UsersSentMessagesWhatsappModule,
    PartnersModule,
    VehiclesCategoriesModule,
    VehiclesItemsModule,
    VehiclesModule,
    VehiclesMotorModule,
    VehiclesDimensionsModule,
    VehiclesStoresModule,
    VehiclesStoresContentsModule,
    VehiclesOptionsItensModule,
    OffersModule,
    OffersPromotionModule,
    OffersDetailsModule,
    AuthModule,
    UmblerTalkWhatsappModule,
    VehiclesGalleryModule,
    VehiclesBrandModule,
    CloudinaryModule,
    FilesImagesModule,
    RdStationModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtStrategy],
})
export class AppModule {}
