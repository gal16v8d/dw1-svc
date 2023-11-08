import config from '@app/config/config';
import { MeritPointController } from '@app/controller/merit-point.controller';
import {
  MeritPoint,
  MeritPointSchema,
} from '@app/model/schema/merit-point.schema';
import { CacheService } from '@app/service/cache.service';
import { MeritPointService } from '@app/service/merit-point.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([
      { name: MeritPoint.name, schema: MeritPointSchema },
    ]),
  ],
  controllers: [MeritPointController],
  providers: [MeritPointService, CacheService],
})
export class MeritPointModule {}
