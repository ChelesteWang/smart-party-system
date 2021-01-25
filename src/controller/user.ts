import { Inject, Controller, Provide, Query, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
@Controller('/api/v1')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/user/all')
  async getAllUser() {
    const user = await this.userService.getAllUser();
    return { success: true, message: 'OK', data: user };
  }

  @Get('/user')
  async getUser(@Query() uid: number) {
    const user = await this.userService.getUserByID(uid);
    console.log(user)
    return { success: true, message: 'OK', data: user };
  }
}
