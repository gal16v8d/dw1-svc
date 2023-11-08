import config from '@app/config/config';
import { MachineController } from '@app/controller/machine.controller';
import { Machine, MachineSchema } from '@app/model/schema/machine.schema';
import { CacheService } from '@app/service/cache.service';
import { MachineService } from '@app/service/machine.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }]),
  ],
  controllers: [MachineController],
  providers: [MachineService, CacheService],
})
export class MachineModule {}
