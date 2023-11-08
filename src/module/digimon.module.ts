import config from '@app/config/config';
import { DigimonController } from '@app/controller/digimon.controller';
import { Digimon, DigimonSchema } from '@app/model/schema/digimon.schema';
import { CacheService } from '@app/service/cache.service';
import { DigimonService } from '@app/service/digimon.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Digimon.name, schema: DigimonSchema }]),
  ],
  controllers: [DigimonController],
  providers: [DigimonService, CacheService],
})
export class DigimonModule {}
