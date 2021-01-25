import { Inject, Controller, Provide, Query, Param, Get, Post, Put, Del } from '@midwayjs/decorator';
import { Context } from 'egg';
import { Result } from '../interface';
import { PartyMemberService } from '../service/partyMember';

@Provide()
@Controller('/api/v1/partymember')
export class PartyMemberController {
  @Inject()
  ctx: Context;

  @Inject()
  partyMemberService: PartyMemberService;

  @Get('/')
  async getAllPartyMember(): Promise<Result> {
    const partyMember = await this.partyMemberService.getAllPartyMember();
    return { code: 200, message: 'OK', data: partyMember };
  }

  @Get('/:id')
  async getPartyMemberByID(@Param() id: number): Promise<Result> {
    const partyMember = await this.partyMemberService.getPartyMemberByID(id);
    return { code: 200, message: 'OK', data: partyMember };
  }

  @Post('/')
  async createPartyMember(@Query() id) {
    
  }

  @Put('/:id')
  async updatePartyMember(@Param() id) {
    
  }

  @Del('/:id')
  async deletePartyMember(@Param() id: number) {
    
  }
}
