import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedalController } from '../controller/medal.controller';
import { Medal, MedalSchema } from '../model/schema/medal.schema';
import { MedalService } from '../service/medal.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Medal.name, schema: MedalSchema }]),
  ],
  controllers: [MedalController],
  providers: [MedalService],
})
export class MedalModule {}
