import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CardDto {
  @ApiProperty({ description: 'Card number into the game' })
  number: number;
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  point?: number;
  @ApiPropertyOptional()
  price?: number;
  @ApiProperty({ description: 'Determine if the card can be sold/exchanged' })
  exchangeable: boolean;
}
