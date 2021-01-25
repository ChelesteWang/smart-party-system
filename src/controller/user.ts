import { Inject, Controller, Provide, Query, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
@Controller('/api/v1/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/all')
  async getAllUser() {
    const user = await this.userService.getAllUser();
    return { success: true, message: 'OK', data: user };
  }

  @Get('/')
  async getUser(@Query() uid: number) {
    const user = await this.userService.getUserByID(uid);
    console.log(user)
    return { success: true, message: 'OK', data: user };
  }
}
