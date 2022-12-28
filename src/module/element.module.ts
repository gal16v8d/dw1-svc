import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { ElementController } from '../controller/element.controller';
import { Element, ElementSchema } from '../model/schema/element.schema';
import { ElementService } from '../service/element.service';
import { FlagServiceModule } from './flag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    FlagServiceModule,
    MongooseModule.forFeature([{ name: Element.name, schema: ElementSchema }]),
  ],
  controllers: [ElementController],
  providers: [ElementService],
})
export class ElementModule {}
