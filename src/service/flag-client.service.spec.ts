import { FlagServiceModule } from '@app/module/flag.module';
import { RestClientProvider } from '@app/provider/rest-client.provider';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { FlagClientService } from './flag-client.service';

describe('FlagService test suite', () => {
  const TEST_FLAG = 'TEST_FLAG';
  let flagService: FlagClientService;
  let restClientProvider: RestClientProvider;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FlagServiceModule],
    }).compile();
    flagService = module.get<FlagClientService>(FlagClientService);
    restClientProvider = module.get<RestClientProvider>(RestClientProvider);
  });

  it('should be defined', () => {
    expect(flagService).toBeDefined();
    expect(restClientProvider).toBeDefined();
  });

  it('should return true, when value is true', async () => {
    const mockProvider = jest
      .spyOn(restClientProvider, 'get')
      .mockResolvedValue({ status: HttpStatus.OK, data: { value: true } });
    const result = await flagService.getFlagValue(TEST_FLAG);
    expect(mockProvider).toHaveBeenCalled();
    expect(result).toBeTruthy();
  });

  it.each`
    payload
    ${{}}
    ${{ value: false }}
    ${{ name: TEST_FLAG }}
  `('should return false, given payload is $payload', async ({ payload }) => {
    const mockProvider = jest
      .spyOn(restClientProvider, 'get')
      .mockResolvedValue({ status: HttpStatus.OK, data: payload });
    const result = await flagService.getFlagValue(TEST_FLAG);
    expect(mockProvider).toHaveBeenCalled();
    expect(result).toBeFalsy();
  });

  it('should return false, when flag service is down', async () => {
    const mockFlagSvc = jest
      .spyOn(restClientProvider, 'get')
      .mockRejectedValue(
        () => new HttpException('Error', HttpStatus.SERVICE_UNAVAILABLE),
      );
    const result = await flagService.getFlagValue(TEST_FLAG);
    expect(mockFlagSvc).toBeCalled();
    expect(result).toBeFalsy();
  });
});
