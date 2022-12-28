import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { RecruitController } from '../controller/recruit.controller';
import { Recruit, RecruitSchema } from '../model/schema/recruit.schema';
import { RecruitService } from '../service/recruit.service';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Recruit.name, schema: RecruitSchema }]),
  ],
  controllers: [RecruitController],
  providers: [RecruitService],
})
export class RecruitModule {}
