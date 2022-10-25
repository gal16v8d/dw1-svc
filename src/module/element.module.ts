import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElementController } from '../controller/element.controller';
import { Element, ElementSchema } from '../model/schema/element.schema';
import { ElementService } from '../service/element.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Element.name, schema: ElementSchema }]),
  ],
  controllers: [ElementController],
  providers: [ElementService],
})
export class ElementModule {}
