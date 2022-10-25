import { ApiProperty } from '@nestjs/swagger';

export class ExchangeDto {
  @ApiProperty({ description: 'Item you will exchange' })
  base: string;
  @ApiProperty({ description: 'Item you will receive' })
  result: string;
  @ApiProperty({ description: 'Who exchanges the item' })
  who: string;
}
