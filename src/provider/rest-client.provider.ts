import { ResponseDto } from '@app/model/dto/response.dto';
import { HttpService } from '@nestjs/axios';
import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse, Method, ResponseType } from 'axios';
import { EmptyError, firstValueFrom } from 'rxjs';

@Injectable()
export class RestClientProvider {
  constructor(private readonly httpService: HttpService) {}

  async get<T = unknown>(
    service: string,
    url: string,
    headers: Record<string, Array<string> | string | number | boolean | null>,
  ): Promise<ResponseDto> {
    return this.prepareRequest<T>(service, url, headers, 'GET');
  }

  private async prepareRequest<T = unknown>(
    service: string,
    url: string,
    headers: Record<string, Array<string> | string | number | boolean | null>,
    method: Method,
    data?: T,
    responseType?: ResponseType,
  ) {
    const config: AxiosRequestConfig = {
      url,
      method,
      data,
      headers,
      responseType,
    };
    return this.performRequest<T>(config, service);
  }

  private async performRequest<T = unknown>(
    config: AxiosRequestConfig,
    service: string,
  ) {
    try {
      const serviceResponse: AxiosResponse = await firstValueFrom(
        this.httpService.request<T>(config),
      );
      return {
        status: serviceResponse.status,
        data: serviceResponse?.data as unknown,
      };
    } catch (e) {
      this.errorHandler(e, service);
    }
  }

  private errorHandler(e: unknown, service: string) {
    if (e instanceof EmptyError) {
      throw new InternalServerErrorException(`No response from ${service}`);
    } else if (
      ['ECONNREFUSED', 'ENOTFOUND'].includes(
        (e as { code?: string })?.code || '',
      )
    ) {
      throw new ServiceUnavailableException(
        `Service ${service} is not responding`,
      );
    } else if ((e as { response: ResponseDto })?.response) {
      const excInfo = (e as { response: ResponseDto }).response;
      throw new HttpException(excInfo?.data ?? '', excInfo.status);
    } else {
      throw new InternalServerErrorException(
        `Unexpected response from ${service}`,
      );
    }
  }
}
