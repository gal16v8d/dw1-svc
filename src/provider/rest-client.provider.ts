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
  constructor(private httpService: HttpService) {}

  async get<T = any>(
    service: string,
    url: string,
    headers: Record<string, string | string[] | number | boolean | null>,
  ): Promise<ResponseDto> {
    return this.prepareRequest<T>(service, url, headers, 'GET');
  }

  private async prepareRequest<T = any>(
    service: string,
    url: string,
    headers: Record<string, string | string[] | number | boolean | null>,
    method: Method,
    data?: unknown,
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

  private async performRequest<T = any>(
    config: AxiosRequestConfig,
    service: string,
  ) {
    try {
      const serviceResponse: AxiosResponse = await firstValueFrom(
        this.httpService.request<T>(config),
      );
      return { status: serviceResponse.status, data: serviceResponse?.data };
    } catch (e) {
      this.errorHandler(e, service);
    }
  }

  private errorHandler(e: any, service: string) {
    if (e instanceof EmptyError) {
      throw new InternalServerErrorException(`No response from ${service}`);
    } else if (e?.code === 'ECONNREFUSED') {
      throw new ServiceUnavailableException(
        `Service ${service} is not responding`,
      );
    } else if (e.response) {
      throw new HttpException(e.response?.data ?? '', e.response.status);
    } else {
      throw new InternalServerErrorException(
        `Unexpected response from ${service}`,
      );
    }
  }
}
