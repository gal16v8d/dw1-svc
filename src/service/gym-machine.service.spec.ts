import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model, Types } from 'mongoose';
import { GymMachineDto } from '../model/dto/gym-machine.dto';
import { GymMachine } from '../model/schema/gym-machine.schema';
import mockList from '../__mocks__/gymMachineList.json';
import { GymMachineService } from './gym-machine.service';

const APP_ID = '1';

describe('GymMachineService test suite', () => {
  const requestData: GymMachineDto = {
    location: new Types.ObjectId(mockList[0].location),
    name: mockList[0].name,
    train: mockList[0].train,
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
  let service: GymMachineService;
  let model: Model<GymMachine>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GymMachineService,
        {
          provide: getModelToken('GymMachine'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<GymMachineService>(GymMachineService);
    model = module.get<Model<GymMachine>>(getModelToken('GymMachine'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new gym machine', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockData));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockData);
  });

  it('should return all gym machines', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(mockList);
    const apps = await service.findAll(false);
    expect(apps).toEqual(mockList);
  });

  it('should return single gym machine', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockData);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockData);
  });

  it('should update a gym machine', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockData);
  });

  it('should delete a gym machine', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockData),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockData);
  });
});
