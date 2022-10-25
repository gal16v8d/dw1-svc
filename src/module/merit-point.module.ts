import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeritPointController } from '../controller/merit-point.controller';
import {
  MeritPoint,
  MeritPointSchema,
} from '../model/schema/merit-point.schema';
import { MeritPointService } from '../service/merit-point.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MeritPoint.name, schema: MeritPointSchema },
    ]),
  ],
  controllers: [MeritPointController],
  providers: [MeritPointService],
})
export class MeritPointModule {}
