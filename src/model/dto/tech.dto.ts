import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class TechDto {
  @ApiProperty()
  name: string;
  @ApiPropertyOptional()
  number?: number;
  @ApiProperty()
  power: number;
  @ApiProperty()
  mp: number;
  @ApiPropertyOptional()
  rang?: string;
  @ApiPropertyOptional()
  spec?: string;
  @ApiPropertyOptional()
  element?: Types.ObjectId;
  @ApiPropertyOptional()
  final?: boolean;
}
