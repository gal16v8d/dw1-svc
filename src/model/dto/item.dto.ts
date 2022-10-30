import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class ItemDto {
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  effect?: string[];
  @ApiPropertyOptional()
  location?: Types.ObjectId[];
  @ApiPropertyOptional()
  note?: string;
}
