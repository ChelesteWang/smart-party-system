import { Provide } from '@midwayjs/decorator';
// import { IUserOptions } from '../interface';
import { InjectEntityModel } from '@midwayjs/orm'
import { User } from '../entities/User'
import { Repository } from 'typeorm'

@Provide()
export class UserService {

  @InjectEntityModel(User)
  userModel: Repository<User>;

  async getAllUser() {
    return await this.userModel.find()
  }

  async getUserByID(uid: number) {
    return await this.userModel.findOne(uid)
  }

  async getUserByUsername(username: string) {
    return await this.userModel.findOne({ username: username })
  }
}
