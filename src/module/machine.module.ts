import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MachineController } from '../controller/machine.controller';
import { Machine, MachineSchema } from '../model/schema/machine.schema';
import { MachineService } from '../service/machine.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }]),
  ],
  controllers: [MachineController],
  providers: [MachineService],
})
export class MachineModule {}
