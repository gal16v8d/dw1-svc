import { ApiProperty } from '@nestjs/swagger';

export class MedalDto {
  @ApiProperty()
  number: number;
  @ApiProperty()
  product: string;
  @ApiProperty()
  description: string;
}
