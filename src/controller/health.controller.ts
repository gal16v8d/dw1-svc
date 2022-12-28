import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { HealthService } from '../service/health.service';

@SkipThrottle()
@ApiTags('health controller')
@Controller('health')
export class HealthController {
  constructor(readonly healthService: HealthService) {}

  @Get()
  getHello(): string {
    return this.healthService.getHello();
  }
}
