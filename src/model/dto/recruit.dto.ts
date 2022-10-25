import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class RecruitDto {
  @ApiProperty()
  digimon: Types.ObjectId;
  @ApiProperty()
  location: [Types.ObjectId];
  @ApiPropertyOptional()
  job?: string;
  @ApiPropertyOptional()
  note?: string;
}
