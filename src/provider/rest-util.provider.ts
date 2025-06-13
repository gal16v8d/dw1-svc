import { Injectable } from '@nestjs/common';

@Injectable()
export class RestUtil {
  appendQueryParams(
    url: string,
    params: Record<string, string | string[] | number | boolean | null>,
  ): string {
    const aux = Object.entries(params)
      .map(([key, value]) => {
        if (value !== null && value !== undefined) {
          return `${key}=${this.convertToString(value)}`;
        }
      })
      .filter((v) => v !== undefined);
    return aux.length > 0 ? `${url}?${aux.join('&')}` : url;
  }

  private convertToString(
    value: Array<string> | string | number | boolean | null,
  ): string {
    if (value === null || value === undefined) {
      return '';
    }
    if (Array.isArray(value)) {
      return value.join(',');
    }
    return String(value);
  }
}
