import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { MedalController } from '../controller/medal.controller';
import { Medal, MedalSchema } from '../model/schema/medal.schema';
import { MedalService } from '../service/medal.service';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Medal.name, schema: MedalSchema }]),
  ],
  controllers: [MedalController],
  providers: [MedalService],
})
export class MedalModule {}
