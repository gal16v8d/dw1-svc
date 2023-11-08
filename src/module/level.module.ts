import config from '@app/config/config';
import { LevelController } from '@app/controller/level.controller';
import { Level, LevelSchema } from '@app/model/schema/level.schema';
import { CacheService } from '@app/service/cache.service';
import { LevelService } from '@app/service/level.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Level.name, schema: LevelSchema }]),
  ],
  controllers: [LevelController],
  providers: [LevelService, CacheService],
})
export class LevelModule {}
