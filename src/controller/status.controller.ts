import { CONSTANTS } from '@app/const/dw1.const';
import { StatusDto } from '@app/model/dto/status.dto';
import { Status } from '@app/model/schema/status.schema';
import { CacheService } from '@app/service/cache.service';
import { StatusService } from '@app/service/status.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
