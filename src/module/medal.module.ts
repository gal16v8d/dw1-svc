import config from '@app/config/config';
import { MedalController } from '@app/controller/medal.controller';
import { Medal, MedalSchema } from '@app/model/schema/medal.schema';
import { CacheService } from '@app/service/cache.service';
import { MedalService } from '@app/service/medal.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Medal.name, schema: MedalSchema }]),
  ],
  controllers: [MedalController],
  providers: [MedalService, CacheService],
})
export class MedalModule {}
