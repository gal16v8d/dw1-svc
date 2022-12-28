import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { TechDto } from '../model/dto/tech.dto';
import { Tech } from '../model/schema/tech.schema';
import { TechService } from '../service/tech.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.TECH} controller`)
@Controller(`${CONSTANTS.DB.TECH}s`)
export class TechController extends GenericController<Tech, TechDto> {
  constructor(readonly techService: TechService) {
    super(techService);
  }
}
