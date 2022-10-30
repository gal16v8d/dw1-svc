import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Types } from 'mongoose';
import { RecruitDto } from '../model/dto/recruit.dto';
import { Recruit } from '../model/schema/recruit.schema';
import mockList from '../__mocks__/recruitList.json';
import { RecruitService } from './recruit.service';

const APP_ID = '1';

describe('RecruitService test suite', () => {
  const requestData: RecruitDto = {
    digimon: new Types.ObjectId(mockList[0].digimon),
    job: mockList[0].job,
    location: mockList[0].location.map((v) => new Types.ObjectId(v)),
    note: mockList[0].note,
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
  let service: RecruitService;
  let model: Model<Recruit>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecruitService,
        {
          provide: getModelToken('Recruit'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<RecruitService>(RecruitService);
    model = module.get<Model<Recruit>>(getModelToken('Recruit'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new recruit', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockData));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockData);
  });

  it('should return all recruits', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single recruit', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockData);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockData);
  });

  it('should update a recruit', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockData);
  });

  it('should delete a recruit', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockData);
  });
});
