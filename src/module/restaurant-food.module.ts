import config from '@app/config/config';
import { RestaurantFoodController } from '@app/controller/restaurant-food.controller';
import {
  RestaurantFood,
  RestaurantFoodSchema,
} from '@app/model/schema/restaurant-food.schema';
import { CacheService } from '@app/service/cache.service';
import { RestaurantFoodService } from '@app/service/restaurant-food.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
