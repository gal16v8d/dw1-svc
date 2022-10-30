import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class RestaurantDto {
  @ApiProperty()
  digimon: Types.ObjectId;
  @ApiProperty()
  restaurantFood: Types.ObjectId[];
}
