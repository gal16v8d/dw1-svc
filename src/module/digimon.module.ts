import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DigimonController } from '../controller/digimon.controller';
import { Digimon, DigimonSchema } from '../model/schema/digimon.schema';
import { DigimonService } from '../service/digimon.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Digimon.name, schema: DigimonSchema }]),
  ],
  controllers: [DigimonController],
  providers: [DigimonService],
})
export class DigimonModule {}
