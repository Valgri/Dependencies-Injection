import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  http: HTTP;
  config: ApiConfig;

  static $inject = ['http', 'config'];

  constructor(http: HTTP, config: ApiConfig) {
    this.http = http;
    this.config = config;
  }

  getUsers() {
    return this.http.get(this.config.resources.users) as unknown as User[];
  }
}
