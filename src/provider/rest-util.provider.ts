import { Injectable } from '@nestjs/common';

@Injectable()
export class RestUtil {
  appendQueryParams(
    url: string,
    params: Record<string, string | string[] | number | boolean | null>,
  ): string {
    const aux = Object.entries(params)
      .map((key, value) => {
        if (value) {
          return `${key}=${value}`;
        }
      })
      .filter((v) => v !== undefined);
    return aux.length > 0 ? `${url}?${aux.join('&')}` : url;
  }
}
