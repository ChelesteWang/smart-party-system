import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';

import nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: 'smtp.163.com',
  service: '163',
  secure: true,
  auth: {
      user: 'testcourse2020@163.com',
      pass: 'IBEEBCQKLFUJPZUI'
  }
});

@Provide()
@Controller('/api/v1//mail')
export class EmailController {

  @Inject()
  ctx: Context;

  @Inject()
  logger: { info: (arg0: string, arg1: any) => void; };

  @Get('/send')
  async sendEmail() {
    // 获取发送邮件列表
    const mails = '';
    
    const message = {
      from: 'testcourse2020@163.com',
      to: mails,
      title: '青年大学习主题讨论',
      date: '2020-10-24',
      text: '青年大学习主题讨论支部研究决定开展每周一，全员统一学习'
  }
    const sendHtml = `<div>
        <div style="border:1.0px solid #eeeeee;padding:10.0px; max-width: 800px;margin: 0 auto;">
            <h2 style="font-size: 14px; font-weight: blod">${message.title}</h2>
            <p>时间：${message.date}</p>
            <p>简介：${message.text}</p>
        </div>
        <div style="text-align: center;margin-top: 12px;">
            <p >邮件声明：此邮件由 <strong>系统</strong> 发送，如有问题请联系邮箱：${message.from}</p>
        </div>
    </div>`;

    var mailOptions = {
      // 发送邮件的地址
      from: message.from,
      // 接收邮件的地址
      to: message.to,
      // 邮件主题
      subject: '有一条活动申请待审核',
      // 以HTML的格式显示，这样可以显示图片、链接、字体颜色等信息
      html: sendHtml
    };
    // 发送邮件，并有回调函数
    try {
      const result = await transporter.sendMail(mailOptions);
      this.logger.info('===send email result===', result);
    } catch (error) {
      this.ctx.body = error;
      return;
    }
    this.ctx.body = sendHtml;
  }
}