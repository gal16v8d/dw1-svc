import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { GymMachineController } from '../controller/gym-machine.controller';
import {
  GymMachine,
  GymMachineSchema,
} from '../model/schema/gym-machine.schema';
import { GymMachineService } from '../service/gym-machine.service';
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
  providers: [GymMachineService],
})
export class GymMachineModule {}
