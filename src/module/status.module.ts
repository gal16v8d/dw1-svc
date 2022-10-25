import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusController } from '../controller/status.controller';
import { Status, StatusSchema } from '../model/schema/status.schema';
import { StatusService } from '../service/status.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Status.name, schema: StatusSchema }]),
  ],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
