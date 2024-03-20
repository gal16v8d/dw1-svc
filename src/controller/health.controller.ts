import { HealthService } from '@app/service/health.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';

@SkipThrottle()
@ApiTags('health controller')
@Controller('health')
export class HealthController {
  constructor(readonly healthService: HealthService) {}

  @Get()
  getHello(): Record<string, string> {
    return this.healthService.getHello();
  }
}
