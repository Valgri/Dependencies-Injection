import IoCContainer from 'ioc-lite';
import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import { ApiConfig } from 'src/types';


type IoCResources = {
  config: ApiConfig;
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
}

export const ioc = new IoCContainer<IoCResources>();

ioc.registerClass('logger', Logger);

ioc.registerClass('http',  HTTP);

ioc.registerClass('users', Users);


