import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class MachineDto {
  @ApiProperty()
  location: Types.ObjectId;
  @ApiProperty()
  product: [{ name: string; price: number }];
  @ApiPropertyOptional()
  random?: boolean;
}
