import config from '@app/config/config';
import { LocationController } from '@app/controller/location.controller';
import { Location, LocationSchema } from '@app/model/schema/location.schema';
import { CacheService } from '@app/service/cache.service';
import { LocationService } from '@app/service/location.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
