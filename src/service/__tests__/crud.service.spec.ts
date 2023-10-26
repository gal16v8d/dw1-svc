/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Types } from 'mongoose';
import cardList from '../../__mocks__/cardList.json';
import digimonList from '../../__mocks__/digimonList.json';
import elementList from '../../__mocks__/elementList.json';
import exchangeList from '../../__mocks__/exchangeList.json';
import gymMachineList from '../../__mocks__/gymMachineList.json';
import itemList from '../../__mocks__/itemList.json';
import levelList from '../../__mocks__/levelList.json';
import locationList from '../../__mocks__/locationList.json';
import machineList from '../../__mocks__/machineList.json';
import medalList from '../../__mocks__/medalList.json';
import menuList from '../../__mocks__/menuList.json';
import meritPointList from '../../__mocks__/meritPointList.json';
import recruitList from '../../__mocks__/recruitList.json';
import restaurantFoodList from '../../__mocks__/restaurantFoodList.json';
import restaurantList from '../../__mocks__/restaurantList.json';
import statusList from '../../__mocks__/statusList.json';
import techList from '../../__mocks__/techList.json';
import { Card } from '../../model/schema/card.schema';
import { Digimon } from '../../model/schema/digimon.schema';
import { Element } from '../../model/schema/element.schema';
import { Exchange } from '../../model/schema/exchange.schema';
import { GymMachine } from '../../model/schema/gym-machine.schema';
import { Item } from '../../model/schema/item.schema';
import { Level } from '../../model/schema/level.schema';
import { Location } from '../../model/schema/location.schema';
import { Machine } from '../../model/schema/machine.schema';
import { Medal } from '../../model/schema/medal.schema';
import { Menu } from '../../model/schema/menu.schema';
import { MeritPoint } from '../../model/schema/merit-point.schema';
import { Recruit } from '../../model/schema/recruit.schema';
import { RestaurantFood } from '../../model/schema/restaurant-food.schema';
import { Restaurant } from '../../model/schema/restaurant.schema';
import { Status } from '../../model/schema/status.schema';
import { Tech } from '../../model/schema/tech.schema';
import { CardService } from '../card.service';
import { DigimonService } from '../digimon.service';
import { ElementService } from '../element.service';
import { ExchangeService } from '../exchange.service';
import { GymMachineService } from '../gym-machine.service';
import { ItemService } from '../item.service';
import { LevelService } from '../level.service';
import { LocationService } from '../location.service';
import { MachineService } from '../machine.service';
import { MedalService } from '../medal.service';
import { MenuService } from '../menu.service';
import { MeritPointService } from '../merit-point.service';
import { RecruitService } from '../recruit.service';
import { RestaurantFoodService } from '../restaurant-food.service';
import { RestaurantService } from '../restaurant.service';
import { StatusService } from '../status.service';
import { TechService } from '../tech.service';

describe('CRUD Services test suite', () => {
  const APP_ID = '1';
  const models = [
    {
      name: 'Card',
      serviceType: CardService,
      modelType: Card,
      request: { name: cardList[0].name, number: 0, exchangeable: false },
      all: cardList,
    },
    {
      name: 'Digimon',
      serviceType: DigimonService,
      modelType: Digimon,
      request: {
        name: digimonList[0].name,
        level: new Types.ObjectId(digimonList[0].level),
        type: digimonList[0].type,
        active: digimonList[0].active,
        techFinal: new Types.ObjectId(digimonList[0].techFinal),
        tech: digimonList[0].tech.map((v) => new Types.ObjectId(v)),
        locationHappy: digimonList[0].locationHappy.map(
          (v) => new Types.ObjectId(v),
        ),
        locationSad: digimonList[0].locationSad,
        raisable: digimonList[0].raisable,
        recruitable: digimonList[0].recruitable,
        itemDrop: new Types.ObjectId(digimonList[0].itemDrop),
      },
      all: digimonList,
    },
    {
      name: 'Element',
      serviceType: ElementService,
      modelType: Element,
      request: { name: elementList[0].name },
      all: elementList,
    },
    {
      name: 'Exchange',
      serviceType: ExchangeService,
      modelType: Exchange,
      request: {
        base: exchangeList[0].base,
        result: exchangeList[0].result,
        who: exchangeList[0].who,
      },
      all: exchangeList,
    },
    {
      name: 'GymMachine',
      serviceType: GymMachineService,
      modelType: GymMachine,
      request: {
        location: new Types.ObjectId(gymMachineList[0].location),
        name: gymMachineList[0].name,
        train: gymMachineList[0].train,
      },
      all: gymMachineList,
    },
    {
      name: 'Item',
      serviceType: ItemService,
      modelType: Item,
      request: {
        name: itemList[0].name,
      },
      all: itemList,
    },
    {
      name: 'Level',
      serviceType: LevelService,
      modelType: Level,
      request: {
        name: levelList[0].name,
      },
      all: levelList,
    },
    {
      name: 'Location',
      serviceType: LocationService,
      modelType: Location,
      request: {
        name: locationList[0].name,
      },
      all: locationList,
    },
    {
      name: 'Machine',
      serviceType: MachineService,
      modelType: Machine,
      request: {
        location: new Types.ObjectId(machineList[0].location),
        product: machineList[0].product,
        random: machineList[0].random,
      },
      all: machineList,
    },
    {
      name: 'Medal',
      serviceType: MedalService,
      modelType: Medal,
      request: {
        description: medalList[0].description,
        name: medalList[0].name,
        number: medalList[0].number,
      },
      all: medalList,
    },
    {
      name: 'Menu',
      serviceType: MenuService,
      modelType: Menu,
      request: {
        description: menuList[0].description,
        name: menuList[0].name,
        type: menuList[0].type,
      },
      all: menuList,
    },
    {
      name: 'MeritPoint',
      serviceType: MeritPointService,
      modelType: MeritPoint,
      request: {
        point: meritPointList[0].point,
        item: new Types.ObjectId(meritPointList[0].item),
      },
      all: meritPointList,
    },
    {
      name: 'Recruit',
      serviceType: RecruitService,
      modelType: Recruit,
      request: {
        digimon: new Types.ObjectId(recruitList[0].digimon),
        job: recruitList[0].job,
        location: recruitList[0].location.map((v) => new Types.ObjectId(v)),
        note: recruitList[0].note,
      },
      all: recruitList,
    },
    {
      name: 'RestaurantFood',
      serviceType: RestaurantFoodService,
      modelType: RestaurantFood,
      request: {
        name: restaurantFoodList[0].name,
        price: restaurantFoodList[0].price,
        effect: restaurantFoodList[0].effect,
      },
      all: restaurantFoodList,
    },
    {
      name: 'Restaurant',
      serviceType: RestaurantService,
      modelType: Restaurant,
      request: {
        digimon: new Types.ObjectId(restaurantList[0].digimon),
        restaurantFood: restaurantList[0].restaurantFood.map(
          (v) => new Types.ObjectId(v),
        ),
      },
      all: restaurantList,
    },
    {
      name: 'Status',
      serviceType: StatusService,
      modelType: Status,
      request: {
        name: statusList[0].name,
        description: statusList[0].description,
      },
      all: statusList,
    },
    {
      name: 'Tech',
      serviceType: TechService,
      modelType: Tech,
      request: {
        number: techList[0].number,
        name: techList[0].name,
        element: new Types.ObjectId(techList[0].element),
        power: techList[0].power,
        mp: techList[0].mp,
        rang: techList[0].rang,
        spec: techList[0].spec,
        final: techList[0].final,
      },
      all: techList,
    },
  ];

  models.forEach((databaseModel) => {
    describe(`CRUD ${databaseModel.serviceType.name} test suite`, () => {
      type dbModelType = typeof databaseModel.modelType;
      const requestData = databaseModel.request;
      const mockOne = databaseModel.all[0];
      let dbService: unknown;
      let dbModel: Model<dbModelType>;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [
            databaseModel.serviceType,
            {
              provide: getModelToken(databaseModel.name),
              useValue: {
                new: jest.fn().mockResolvedValue(mockOne),
                constructor: jest.fn().mockResolvedValue(mockOne),
                create: jest.fn().mockResolvedValue(mockOne),
                find: jest.fn().mockResolvedValue(databaseModel.all),
                findOne: jest.fn().mockResolvedValue(mockOne),
                findByIdAndUpdate: jest.fn().mockReturnValue({
                  exec: jest.fn().mockResolvedValueOnce(mockOne),
                } as any),
                findByIdAndRemove: jest.fn().mockReturnValue({
                  exec: jest.fn().mockResolvedValueOnce(mockOne),
                } as any),
                exec: jest.fn(),
              },
            },
          ],
        }).compile();

        dbService = module.get(databaseModel.serviceType);
        dbModel = module.get<Model<dbModelType>>(
          getModelToken(databaseModel.name),
        );
      });

      it('should be defined', () => {
        expect(dbService).toBeDefined();
      });

      it(`should insert a new ${databaseModel.name}`, async () => {
        // @ts-ignore
        const data = await dbService.create(requestData);
        expect(data).toEqual(mockOne);
        expect(dbModel.create).toHaveBeenCalled();
      });

      it(`should return all of ${databaseModel.name}`, async () => {
        // @ts-ignore
        const data = await dbService.findAll(false);
        expect(data).toEqual(databaseModel.all);
        expect(dbModel.find).toHaveBeenCalled();
      });

      it(`should return single ${databaseModel.name}`, async () => {
        // @ts-ignore
        const data = await dbService.findOne(APP_ID, false);
        expect(data).toEqual(mockOne);
        expect(dbModel.findOne).toHaveBeenCalled();
      });

      it(`should update a ${databaseModel.name}`, async () => {
        // @ts-ignore
        const data = await dbService.update(APP_ID, requestData);
        expect(data).toEqual(mockOne);
        expect(dbModel.findByIdAndUpdate).toHaveBeenCalled();
      });

      it(`should delete a ${databaseModel.name}`, async () => {
        // @ts-ignore
        const data = await dbService.delete(APP_ID);
        expect(data).toEqual(mockOne);
        expect(dbModel.findByIdAndRemove).toHaveBeenCalled();
      });
    });
  });
});
