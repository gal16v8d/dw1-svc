import { ApiProperty } from '@nestjs/swagger';

export class RestaurantFoodDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  effect: [string];
}
