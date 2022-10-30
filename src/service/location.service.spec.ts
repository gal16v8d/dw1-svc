import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Location } from '../model/schema/location.schema';
import mockList from '../__mocks__/locationList.json';
import { LocationService } from './location.service';

const APP_ID = '1';

describe('LocationService test suite', () => {
  const requestData = {
    name: mockList[0].name,
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
  let service: LocationService;
  let model: Model<Location>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationService,
        {
          provide: getModelToken('Location'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<LocationService>(LocationService);
    model = module.get<Model<Location>>(getModelToken('Location'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new location', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockData));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockData);
  });

  it('should return all locations', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single location', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockData);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockData);
  });

  it('should update a location', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockData);
  });

  it('should delete a location', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockData);
  });
});
