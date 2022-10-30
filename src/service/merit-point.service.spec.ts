import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Types } from 'mongoose';
import { MeritPointDto } from '../model/dto/merit-point.dto';
import { MeritPoint } from '../model/schema/merit-point.schema';
import mockList from '../__mocks__/meritPointList.json';
import { MeritPointService } from './merit-point.service';

const APP_ID = '1';

describe('MeritPointService test suite', () => {
  const requestData: MeritPointDto = {
    point: mockList[0].point,
    item: new Types.ObjectId(mockList[0].item),
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
  let service: MeritPointService;
  let model: Model<MeritPoint>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MeritPointService,
        {
          provide: getModelToken('MeritPoint'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<MeritPointService>(MeritPointService);
    model = module.get<Model<MeritPoint>>(getModelToken('MeritPoint'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new merit point', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockData));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockData);
  });

  it('should return all merit points', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single merit point', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockData);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockData);
  });

  it('should update a merit point', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockData);
  });

  it('should delete a merit point', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockData);
  });
});
