import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StatusDto } from '../model/dto/status.dto';
import { Status, StatusDocument } from '../model/schema/status.schema';
import { GenericService } from './generic.service';

@Injectable()
export class StatusService extends GenericService<Status, StatusDto> {
  constructor(
    @InjectModel(Status.name)
    private readonly statusModel: Model<StatusDocument>,
  ) {
    super(statusModel);
  }
}
