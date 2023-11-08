import config from '@app/config/config';
import { RestaurantController } from '@app/controller/restaurant.controller';
import {
  Restaurant,
  RestaurantSchema,
} from '@app/model/schema/restaurant.schema';
import { CacheService } from '@app/service/cache.service';
import { RestaurantService } from '@app/service/restaurant.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService, CacheService],
})
export class RestaurantModule {}
