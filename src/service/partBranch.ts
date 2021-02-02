import { Provide } from '@midwayjs/decorator';
// import { IUserOptions } from '../interface';
import { InjectEntityModel } from '@midwayjs/orm'
import { PartyBranch } from '../entities/PartyBranch'
import { Repository } from 'typeorm'

@Provide()
export class PartyBranchService {

    @InjectEntityModel(PartyBranch)
    PartyBranchModel: Repository<PartyBranch>;

    async getAllPartyBranch() {
        return await this.PartyBranchModel.find()
    }

    async getPartyBranchByID(id: number) {
        return await this.PartyBranchModel.findOne(id)
    }

    async getPartyBranchByUsername(name: string) {
        return await this.PartyBranchModel.findOne()
    }

    async createPartyBranch(partyMember: PartyBranch) {
        await this.PartyBranchModel.save(partyMember)
    }

    async updatePartyBranch(id: number, partyMember: PartyBranch) {
        await this.PartyBranchModel.update(id, partyMember)
    }

    async deletePartyBranch(id: number) {
        await this.PartyBranchModel.delete(id)
    }
}
