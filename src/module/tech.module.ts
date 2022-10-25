import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TechController } from '../controller/tech.controller';
import { Tech, TechSchema } from '../model/schema/tech.schema';
import { TechService } from '../service/tech.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tech.name, schema: TechSchema }]),
  ],
  controllers: [TechController],
  providers: [TechService],
})
export class TechModule {}
