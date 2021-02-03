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

  config.redis = {
    client: {
      port: +process.env.REDIS_PORT || 6379, // Redis port
      host: process.env.REDIS_HOST || '127.0.0.1', // Redis host
      password: process.env.REDIS_PASSWORD || '',
      db: +process.env.REDIS_DB || 0,
    },
  };

  config.jwt = {
    enable: true,
    client: {
      secret: 'wxy521', 
    },
    // rule https://github.com/eggjs/egg-path-matching
    ignore: ['/auth/login', '/ping', '/swagger-u*', '/genid', '/genidHex'],
  };

  config.jwtAuth = {
    ignore: config.jwt.ignore,
    redisScope: 'admin', 
    accessTokenExpiresIn: 60 * 60 * 24 * 3, 
  };

  // add middleware 
  config.middleware = [];

  return config;
};
