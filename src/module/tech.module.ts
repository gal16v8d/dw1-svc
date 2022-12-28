import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { TechController } from '../controller/tech.controller';
import { Tech, TechSchema } from '../model/schema/tech.schema';
import { TechService } from '../service/tech.service';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Tech.name, schema: TechSchema }]),
  ],
  controllers: [TechController],
  providers: [TechService],
})
export class TechModule {}
