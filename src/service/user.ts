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
    return await this.userModel.find()
  }

  async getUserByID(uid: number) {
    return await this.userModel.findOne(uid)
  }
  
  async getUserByUsername(username: String) {
    return await this.userModel.findOne({ username: username })
  }
}
