import { Provide } from '@midwayjs/decorator';
// import { ITrainingOptions } from '../interface';
import { InjectEntityModel } from '@midwayjs/orm'
import { TrainingInfo as Training } from '../entities/TrainingInfo'
import { Repository } from 'typeorm'

@Provide()
export class TrainingService {

    @InjectEntityModel(Training)
    trainingModel: Repository<Training>;
    // 获取未审核的信息
    async getUncheckedTraining() {
        return await this.trainingModel.find({checkStatus:0})
    }
}
