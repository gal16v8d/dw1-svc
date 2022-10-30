import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { RestaurantFoodDto } from '../model/dto/restaurant-food.dto';
import { RestaurantFood } from '../model/schema/restaurant-food.schema';
import mockList from '../__mocks__/restaurantFoodList.json';
import { RestaurantFoodService } from './restaurant-food.service';

const APP_ID = '1';

describe('RestaurantFoodService test suite', () => {
  const requestData: RestaurantFoodDto = {
    name: mockList[0].name,
    price: mockList[0].price,
    effect: mockList[0].effect,
  };
  const mockData = mockList[0];
  const mockModel = {
    new: jest.fn().mockResolvedValue(mockData),
    constructor: jest.fn().mockResolvedValue(mockData),
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndRemove: jest.fn(),
    exec: jest.fn(),
  };
  let service: RestaurantFoodService;
  let model: Model<RestaurantFood>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RestaurantFoodService,
        {
          provide: getModelToken('RestaurantFood'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<RestaurantFoodService>(RestaurantFoodService);
    model = module.get<Model<RestaurantFood>>(getModelToken('RestaurantFood'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new restaurant food info', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockData));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockData);
  });

  it('should return all restaurant food info', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single restaurant food info', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockData);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockData);
  });

  it('should update a restaurant food info', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockData);
  });

  it('should delete a restaurant food info', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockData);
  });
});
