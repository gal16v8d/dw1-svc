import config from '@app/config/config';
import { RecruitController } from '@app/controller/recruit.controller';
import { Recruit, RecruitSchema } from '@app/model/schema/recruit.schema';
import { CacheService } from '@app/service/cache.service';
import { RecruitService } from '@app/service/recruit.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Recruit.name, schema: RecruitSchema }]),
  ],
  controllers: [RecruitController],
  providers: [RecruitService, CacheService],
})
export class RecruitModule {}
