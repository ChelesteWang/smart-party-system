import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import * as swagger from '@midwayjs/swagger';
import * as orm from '@midwayjs/orm';

@Configuration({
  imports: [
    orm, swagger
  ],
})
export class ContainerLifeCycle implements ILifeCycle {

  @App()
  app: Application;

  async onReady() {
    // this.app.use(await this.app.generateMiddleware('authz'));
  }
}
