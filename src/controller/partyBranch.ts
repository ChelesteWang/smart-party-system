import { Inject, Controller, Provide, Query, Param, Get, Post, Put, Del } from '@midwayjs/decorator';
import { Context } from 'egg';
import { Result } from '../interface';
import { PartyBranchService } from '../service/partyBranch';

@Provide()
@Controller('/api/v1/partyBranch')
export class PartyMemberController {
  @Inject()
  ctx: Context;

  @Inject()
  partyBranchService: PartyBranchService;

  @Get('/')
  async getAllPartyMember(): Promise<Result> {
    const partyBranch = await this.partyBranchService.getAllPartyMember();
    return { code: 200, message: 'OK', data: partyBranch };
  }

  @Get('/:id')
  async getPartyMemberByID(@Param() id: number): Promise<Result> {
    const partyBranch = await this.partyBranchService.getPartyMemberByID(id);
    return { code: 200, message: 'OK', data: partyBranch };
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
