import config from '@app/config/config';
import { GymMachineController } from '@app/controller/gym-machine.controller';
import {
  GymMachine,
  GymMachineSchema,
} from '@app/model/schema/gym-machine.schema';
import { CacheService } from '@app/service/cache.service';
import { GymMachineService } from '@app/service/gym-machine.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([
      { name: GymMachine.name, schema: GymMachineSchema },
    ]),
  ],
  controllers: [GymMachineController],
  providers: [GymMachineService, CacheService],
})
export class GymMachineModule {}
