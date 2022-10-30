import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class GymMachineDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  location: Types.ObjectId;
  @ApiProperty()
  train: string[];
}
