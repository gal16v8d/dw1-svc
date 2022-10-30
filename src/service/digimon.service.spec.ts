import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Types } from 'mongoose';
import { DigimonDto } from '../model/dto/digimon.dto';
import { Digimon } from '../model/schema/digimon.schema';
import mockList from '../__mocks__/digimonList.json';
import { DigimonService } from './digimon.service';

const APP_ID = '1';

describe('DigimonService test suite', () => {
  const requestData: DigimonDto = {
    name: mockList[0].name,
    level: new Types.ObjectId(mockList[0].level),
    type: mockList[0].type,
    active: mockList[0].active,
    techFinal: new Types.ObjectId(mockList[0].techFinal),
    tech: mockList[0].tech.map((v) => new Types.ObjectId(v)),
    locationHappy: mockList[0].locationHappy.map((v) => new Types.ObjectId(v)),
    locationSad: mockList[0].locationSad,
    raisable: mockList[0].raisable,
    recruitable: mockList[0].recruitable,
    itemDrop: new Types.ObjectId(mockList[0].itemDrop),
  };
  const mockDigimon = mockList[0];
  const mockModel = {
    new: jest.fn().mockResolvedValue(mockDigimon),
    constructor: jest.fn().mockResolvedValue(mockDigimon),
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndRemove: jest.fn(),
    exec: jest.fn(),
  };
  let service: DigimonService;
  let model: Model<Digimon>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DigimonService,
        {
          provide: getModelToken('Digimon'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<DigimonService>(DigimonService);
    model = module.get<Model<Digimon>>(getModelToken('Digimon'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new Digimon', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockDigimon));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockDigimon);
  });

  it('should return all Digimons', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single Digimon', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockDigimon);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockDigimon);
  });

  it('should update a Digimon', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockDigimon),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockDigimon);
  });

  it('should delete a Digimon', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockDigimon),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockDigimon);
  });
});
