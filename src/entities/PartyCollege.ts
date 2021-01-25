import { Column, Entity } from "typeorm";
import { EntityModel } from '@midwayjs/orm';

@EntityModel('party_college')
@Entity("party_college", { schema: "test" })
export class PartyCollege {
  @Column("int", { primary: true, name: "ID" })
  id: number;
}
