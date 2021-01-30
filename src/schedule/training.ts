import {
    CommonSchedule,
    Inject,
    Provide,
    Schedule,
} from '@midwayjs/decorator';

import { Context } from 'egg';

@Provide()
@Schedule({
    interval: '7200s',
    type: 'worker',
})

//   定时推送未审核的活动（两小时提醒一次）
export class Training implements CommonSchedule {

    @Inject()
    ctx: Context;

    @Inject()
    logger: { info: (arg0: string, arg1: number) => void; };

    async exec() {

        const messages = await this.ctx.curl('localhost:7001/api/v1/news/uncheck',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
        const url = 'https://oapi.dingtalk.com/robot/send?access_token=e457955e2cdcac07471f1f9b2e21ec6145a819ecf96ae54060dd01136a8c81cf'
        const res = await this.ctx.curl(
            url,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                data: {
                    msgtype: 'feedCard',
                    feedCard: {
                        links: messages,
                    },
                },
            }
        );
        this.logger.info('send news status', res.status);
    }
}

module.exports = Training;
