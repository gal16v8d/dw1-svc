import { ApiProperty } from '@nestjs/swagger';

export class NameInputDto {
  @ApiProperty()
  name: string;
}
