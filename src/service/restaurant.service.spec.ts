import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Types } from 'mongoose';
import { RestaurantDto } from '../model/dto/restaurant.dto';
import { Restaurant } from '../model/schema/restaurant.schema';
import mockList from '../__mocks__/restaurantList.json';
import { RestaurantService } from './restaurant.service';

const APP_ID = '1';

describe('RestaurantService test suite', () => {
  const requestData: RestaurantDto = {
    digimon: new Types.ObjectId(mockList[0].digimon),
    restaurantFood: mockList[0].restaurantFood.map(
      (v) => new Types.ObjectId(v),
    ),
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
  let service: RestaurantService;
  let model: Model<Restaurant>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RestaurantService,
        {
          provide: getModelToken('Restaurant'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<RestaurantService>(RestaurantService);
    model = module.get<Model<Restaurant>>(getModelToken('Restaurant'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new restaurant info', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockData));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockData);
  });

  it('should return all restaurant info', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single restaurant info', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockData);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockData);
  });

  it('should update a restaurant info', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockData);
  });

  it('should delete a restaurant info', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockData);
  });
});
