import { Provide } from '@midwayjs/decorator';
// import { IUserOptions } from '../interface';
import { InjectEntityModel } from '@midwayjs/orm'
import { PartyMember } from '../entities/PartyMember'
import { Repository } from 'typeorm'

@Provide()
export class PartyMemberService {

    @InjectEntityModel(PartyMember)
    PartyMemberModel: Repository<PartyMember>;

    async getAllPartyMember() {
        return await this.PartyMemberModel.find()
    }

    async getPartyMemberByID(id: number) {
        return await this.PartyMemberModel.findOne(id)
    }

    async getPartyMemberByUsername(name: string) {
        return await this.PartyMemberModel.findOne({ name: name })
    }

    async createPartyMember(partyMember: PartyMember) {
        await this.PartyMemberModel.save(partyMember)
    }

    async updatePartyMember(id: number, partyMember: PartyMember) {
        await this.PartyMemberModel.update(id, partyMember)
    }

    async deletePartyMember(id: number) {
        await this.PartyMemberModel.delete(id)
    }
}
