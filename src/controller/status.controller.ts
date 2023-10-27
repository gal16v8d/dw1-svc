import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CONSTANTS } from '../const/dw1.const';
import { StatusDto } from '../model/dto/status.dto';
import { Status } from '../model/schema/status.schema';
import { CacheService } from '../service/cache.service';
import { StatusService } from '../service/status.service';
import { GenericController } from './generic.controller';

@ApiTags(`${CONSTANTS.DB.STATUS} controller`)
@Controller(`${CONSTANTS.DB.STATUS}`)
export class StatusController extends GenericController<Status, StatusDto> {
  constructor(
    readonly statusService: StatusService,
    readonly cacheService: CacheService,
  ) {
    super(statusService, cacheService);
  }
}
