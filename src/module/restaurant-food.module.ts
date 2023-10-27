import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { RestaurantFoodController } from '../controller/restaurant-food.controller';
import {
  RestaurantFood,
  RestaurantFoodSchema,
} from '../model/schema/restaurant-food.schema';
import { CacheService } from '../service/cache.service';
import { RestaurantFoodService } from '../service/restaurant-food.service';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([
      { name: RestaurantFood.name, schema: RestaurantFoodSchema },
    ]),
  ],
  controllers: [RestaurantFoodController],
  providers: [RestaurantFoodService, CacheService],
})
export class RestaurantFoodModule {}
