import IoCContainer from 'ioc-lite';
import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import { ApiConfig } from 'src/types';


export const createIoCContainer = (config: ApiConfig = { path: '', resources: {} }) =>  {
  const ioc = new IoCContainer();

  ioc.register('Logger', new Logger());

  ioc.register('HTTP',  new HTTP(config));

  ioc.register('Users', new Users(config));

  return ioc;
};