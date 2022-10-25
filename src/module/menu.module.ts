import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuController } from '../controller/menu.controller';
import { Menu, MenuSchema } from '../model/schema/menu.schema';
import { MenuService } from '../service/menu.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }]),
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
