import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class MeritPointDto {
  @ApiProperty()
  point: number;
  @ApiProperty()
  item: Types.ObjectId;
}
