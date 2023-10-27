import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { MachineController } from '../controller/machine.controller';
import { Machine, MachineSchema } from '../model/schema/machine.schema';
import { CacheService } from '../service/cache.service';
import { MachineService } from '../service/machine.service';
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
