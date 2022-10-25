import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecruitController } from '../controller/recruit.controller';
import { Recruit, RecruitSchema } from '../model/schema/recruit.schema';
import { RecruitService } from '../service/recruit.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recruit.name, schema: RecruitSchema }]),
  ],
  controllers: [RecruitController],
  providers: [RecruitService],
})
export class RecruitModule {}
