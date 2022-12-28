import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { DigimonController } from '../controller/digimon.controller';
import { Digimon, DigimonSchema } from '../model/schema/digimon.schema';
import { DigimonService } from '../service/digimon.service';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Digimon.name, schema: DigimonSchema }]),
  ],
  controllers: [DigimonController],
  providers: [DigimonService],
})
export class DigimonModule {}
