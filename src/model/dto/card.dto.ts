import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CardDto {
  @ApiProperty({ description: 'Card number into the game' })
  @IsNotEmpty()
  number: number;
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiPropertyOptional()
  point?: number;
  @ApiPropertyOptional()
  price?: number;
  @ApiProperty({ description: 'Determine if the card can be sold/exchanged' })
  @IsBoolean()
  exchangeable: boolean;
}
