import { ApiProperty } from '@nestjs/swagger';

export class MedalDto {
  @ApiProperty()
  number: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}
