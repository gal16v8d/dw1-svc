import { NameInputDto } from '@app/model/dto/name.input.dto';
import { Location, LocationDocument } from '@app/model/schema/location.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class LocationService extends GenericService<Location, NameInputDto> {
  constructor(
    @InjectModel(Location.name)
    readonly locationModel: Model<LocationDocument>,
  ) {
    super(locationModel);
  }
}
