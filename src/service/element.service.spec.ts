import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Element } from '../model/schema/element.schema';
import { ElementService } from './element.service';
import { elementArray, mockElement } from '../__mocks__/element.mock';

const APP_ID = '1';

describe('ElementService test suite', () => {
  const requestData = {
    name: mockElement.name,
  };
  const mockModel = {
    new: jest.fn().mockResolvedValue(mockElement),
    constructor: jest.fn().mockResolvedValue(mockElement),
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndRemove: jest.fn(),
    exec: jest.fn(),
  };
  let service: ElementService;
  let model: Model<Element>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ElementService,
        {
          provide: getModelToken('Element'),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<ElementService>(ElementService);
    model = module.get<Model<Element>>(getModelToken('Element'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new element', async () => {
    jest
      .spyOn(model, 'create')
      .mockImplementationOnce(() => Promise.resolve(mockElement));
    const newApp = await service.create(requestData);
    expect(newApp).toEqual(mockElement);
  });

  it('should return all elements', async () => {
    jest.spyOn(model, 'find').mockResolvedValue(elementArray);
    const apps = await service.findAll(false);
    expect(apps).toEqual(elementArray);
  });

  it('should return single element', async () => {
    jest.spyOn(model, 'findOne').mockResolvedValue(mockElement);
    const app = await service.findOne(APP_ID, false);
    expect(app).toEqual(mockElement);
  });

  it('should update a element', async () => {
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockElement),
    } as any);
    const app = await service.update(APP_ID, requestData);
    expect(app).toEqual(mockElement);
  });

  it('should delete a element', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockElement),
    } as any);
    const app = await service.delete(APP_ID);
    expect(app).toEqual(mockElement);
  });
});
