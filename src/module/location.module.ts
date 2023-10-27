import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { LocationController } from '../controller/location.controller';
import { Location, LocationSchema } from '../model/schema/location.schema';
import { CacheService } from '../service/cache.service';
import { LocationService } from '../service/location.service';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([
      { name: Location.name, schema: LocationSchema },
    ]),
  ],
  controllers: [LocationController],
  providers: [LocationService, CacheService],
})
export class LocationModule {}
