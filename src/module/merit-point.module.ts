import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { MeritPointController } from '../controller/merit-point.controller';
import {
  MeritPoint,
  MeritPointSchema,
} from '../model/schema/merit-point.schema';
import { MeritPointService } from '../service/merit-point.service';
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
  providers: [MeritPointService],
})
export class MeritPointModule {}
