import { Logger } from './logger';

import type { ApiConfig } from '../types';
export class HTTP {
  logger: Logger;
  config: ApiConfig;

  static $inject = ['logger', 'config'];

  constructor(logger: Logger, config: ApiConfig) {
    this.config = config;
    this.logger = logger;
  }

  async get(url: string) {
    const response = await fetch(`${this.config.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}
