import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantController } from '../controller/restaurant.controller';
import {
  Restaurant,
  RestaurantSchema,
} from '../model/schema/restaurant.schema';
import { RestaurantService } from '../service/restaurant.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
