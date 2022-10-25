import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GymMachineController } from '../controller/gym-machine.controller';
import {
  GymMachine,
  GymMachineSchema,
} from '../model/schema/gym-machine.schema';
import { GymMachineService } from '../service/gym-machine.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GymMachine.name, schema: GymMachineSchema },
    ]),
  ],
  controllers: [GymMachineController],
  providers: [GymMachineService],
})
export class GymMachineModule {}
