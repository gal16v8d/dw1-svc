import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Types } from 'mongoose';
import { TechDto } from '../model/dto/tech.dto';
import { Tech } from '../model/schema/tech.schema';
import mockList from '../__mocks__/techList.json';
import { TechService } from './tech.service';

const APP_ID = '1';

describe('TechService test suite', () => {
  const requestData: TechDto = {
    number: mockList[0].number,
    name: mockList[0].name,
    element: new Types.ObjectId(mockList[0].element),
    power: mockList[0].power,
    mp: mockList[0].mp,
    rang: mockList[0].rang,
    spec: mockList[0].spec,
    final: mockList[0].final,
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
  let service: TechService;
  let model: Model<Tech>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TechService,
        {
          provide: getModelToken('Tech'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<TechService>(TechService);
    model = module.get<Model<Tech>>(getModelToken('Tech'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new tech info', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockData));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockData);
  });

  it('should return all tech info', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single tech info', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockData);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockData);
  });

  it('should update a tech info', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockData);
  });

  it('should delete a tech info', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockData);
  });
});
