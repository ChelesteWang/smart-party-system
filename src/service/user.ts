import { Provide } from '@midwayjs/decorator';
// import { IUserOptions } from '../interface';
import { InjectEntityModel } from '@midwayjs/orm'
import { user } from './entity/user'
import { Repository } from 'typeorm'

@Provide()
export class UserService {

  @InjectEntityModel(user)
  userModel: Repository<user>;

  async getAllUser() {
    let userList = await this.userModel.find()
    return userList
  }

  async getUserByID(uid) {
    let user = await this.userModel.findOne(uid)
    return user
  }
}
