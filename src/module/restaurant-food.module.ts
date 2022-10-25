import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantFoodController } from '../controller/restaurant-food.controller';
import {
  RestaurantFood,
  RestaurantFoodSchema,
} from '../model/schema/restaurant-food.schema';
import { RestaurantFoodService } from '../service/restaurant-food.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RestaurantFood.name, schema: RestaurantFoodSchema },
    ]),
  ],
  controllers: [RestaurantFoodController],
  providers: [RestaurantFoodService],
})
export class RestaurantFoodModule {}
