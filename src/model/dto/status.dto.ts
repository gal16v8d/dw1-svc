import { ApiProperty } from '@nestjs/swagger';

export class StatusDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}
