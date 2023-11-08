import { AppModule } from '@app/module/app.module';
import { FlagClientService } from '@app/service/flag-client.service';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { HeaderGuard } from './auth.guard';

describe('HeaderGuard test suite', () => {
  const mockJson = jest.fn();
  const mockStatus = jest.fn().mockImplementation(() => ({ json: mockJson }));
  const mockResponse = jest
    .fn()
    .mockImplementation(() => ({ status: mockStatus }));
  const mockHttpArgs = jest.fn().mockImplementation(() => ({
    getResponse: mockResponse,
    getRequest: () => ({
      url: 'test-url',
      headers: {
        'x-api-key': '',
      },
    }),
  }));
  const mockArgHost = {
    switchToHttp: mockHttpArgs,
    getArgByIndex: jest.fn(),
    getArgs: jest.fn(),
    getType: jest.fn(),
    switchToRpc: jest.fn(),
    switchToWs: jest.fn(),
    getClass: jest.fn(),
    getHandler: jest.fn(),
  };

  let app: INestApplication;
  let guard: HeaderGuard;
  let flagSvc: FlagClientService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = module.createNestApplication();
    guard = app.get<HeaderGuard>(HeaderGuard);
    flagSvc = app.get<FlagClientService>(FlagClientService);
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('guard and service should be defined', () => {
    expect(guard).toBeDefined();
    expect(flagSvc).toBeDefined();
  });

  it('can not active bad secret header', async () => {
    const mockFlagSvc = jest
      .spyOn(flagSvc, 'getFlagValue')
      .mockResolvedValue(true);
    const result = await guard.canActivate(mockArgHost);
    expect(mockFlagSvc).toBeCalled();
    expect(result).toBeFalsy();
  });

  it('activated regarding flag value', async () => {
    const mockFlagSvc = jest
      .spyOn(flagSvc, 'getFlagValue')
      .mockResolvedValue(false);
    const result = await guard.canActivate(mockArgHost);
    expect(mockFlagSvc).toBeCalled();
    expect(result).toBeTruthy();
  });
});
