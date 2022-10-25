import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NameInputDto } from '../model/dto/name.input.dto';
import { Location, LocationDocument } from '../model/schema/location.schema';
import { GenericService } from './generic.service';

@Injectable()
export class LocationService extends GenericService<Location, NameInputDto> {
  constructor(
    @InjectModel(Location.name)
    private readonly locationModel: Model<LocationDocument>,
  ) {
    super(locationModel);
  }
}
