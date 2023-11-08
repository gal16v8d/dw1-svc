import config from '@app/config/config';
import { StatusController } from '@app/controller/status.controller';
import { Status, StatusSchema } from '@app/model/schema/status.schema';
import { CacheService } from '@app/service/cache.service';
import { StatusService } from '@app/service/status.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Status.name, schema: StatusSchema }]),
  ],
  controllers: [StatusController],
  providers: [StatusService, CacheService],
})
export class StatusModule {}
