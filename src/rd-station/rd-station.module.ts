//Dependencies
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

//Serices
import { RdStationService } from './rd-station.service';

@Module({
  imports: [HttpModule],
  providers: [RdStationService],
  exports: [RdStationService],
})
export class RdStationModule {}
