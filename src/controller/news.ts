import { Inject, Controller, Provide, Get } from '@midwayjs/decorator';
import { Context } from 'egg';
import { TrainingService } from '../service/training';

@Provide()
@Controller('/api/v1/training')
export class TrainingController {
  @Inject()
  ctx: Context;

  @Inject()
  trainingService: TrainingService;

  @Get('/uncheck')
  async getAllTraining() {
    const training = await this.trainingService.getUncheckedTraining();
    return { success: true, message: 'OK', data: training };
  }

}
