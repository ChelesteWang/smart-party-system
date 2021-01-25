import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware } from '@midwayjs/web';
import authz from 'koa-authz';
import casbin = require('casbin');


@Provide()
export class AurhzMiddleware implements IWebMiddleware {

    resolve() {
        return authz({
            newEnforcer: async () => await casbin.newEnforcer("src/config/authz/authz_model.conf", "src/config/authz/authz_policy.csv")          
        })
    }

}