import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LevelController } from '../controller/level.controller';
import { Level, LevelSchema } from '../model/schema/level.schema';
import { LevelService } from '../service/level.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Level.name, schema: LevelSchema }]),
  ],
  controllers: [LevelController],
  providers: [LevelService],
})
export class LevelModule {}
