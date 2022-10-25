import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class DigimonDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  level: Types.ObjectId;
  @ApiPropertyOptional()
  type?: string;
  @ApiPropertyOptional()
  active?: string;
  @ApiPropertyOptional()
  techInitial?: Types.ObjectId;
  @ApiPropertyOptional()
  techFinal?: Types.ObjectId;
  @ApiProperty()
  tech: [Types.ObjectId];
  @ApiPropertyOptional()
  locationHappy?: [Types.ObjectId];
  @ApiPropertyOptional()
  locationSad?: [Types.ObjectId];
  @ApiProperty()
  raisable: boolean;
  @ApiProperty()
  recruitable: boolean;
  @ApiPropertyOptional()
  itemDrop?: Types.ObjectId;
}
