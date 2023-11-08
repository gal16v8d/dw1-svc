import { StatusDto } from '@app/model/dto/status.dto';
import { Status, StatusDocument } from '@app/model/schema/status.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class StatusService extends GenericService<Status, StatusDto> {
  constructor(
    @InjectModel(Status.name)
    readonly statusModel: Model<StatusDocument>,
  ) {
    super(statusModel);
  }
}
