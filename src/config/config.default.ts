import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611391235014_6575';

  // Configure the database 
  config.orm = {
    type: 'mysql',
    host: '47.94.228.26',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test',
    synchronize: false,
    logging: false,
  }

  // add middleware 
  config.middleware = [];

  return config;
};
