import config from '@app/config/config';
import { TechController } from '@app/controller/tech.controller';
import { Tech, TechSchema } from '@app/model/schema/tech.schema';
import { CacheService } from '@app/service/cache.service';
import { TechService } from '@app/service/tech.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Tech.name, schema: TechSchema }]),
  ],
  controllers: [TechController],
  providers: [TechService, CacheService],
})
export class TechModule {}
