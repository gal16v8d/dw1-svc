import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { MedalDto } from '../model/dto/medal.dto';
import { Medal } from '../model/schema/medal.schema';
import mockList from '../__mocks__/medalList.json';
import { MedalService } from './medal.service';

const APP_ID = '1';

describe('MedalService test suite', () => {
  const requestData: MedalDto = {
    description: mockList[0].description,
    name: mockList[0].name,
    number: mockList[0].number,
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
  let service: MedalService;
  let model: Model<Medal>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MedalService,
        {
          provide: getModelToken('Medal'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<MedalService>(MedalService);
    model = module.get<Model<Medal>>(getModelToken('Medal'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new medal', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockData));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockData);
  });

  it('should return all medals', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single medal', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockData);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockData);
  });

  it('should update a medal', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockData);
  });

  it('should delete a medal', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockData);
  });
});
