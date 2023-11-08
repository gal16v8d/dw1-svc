import { NameInputDto } from '@app/model/dto/name.input.dto';
import { Element, ElementDocument } from '@app/model/schema/element.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from './generic.service';

@Injectable()
export class ElementService extends GenericService<Element, NameInputDto> {
  constructor(
    @InjectModel(Element.name)
    readonly elementModel: Model<ElementDocument>,
  ) {
    super(elementModel);
  }
}
