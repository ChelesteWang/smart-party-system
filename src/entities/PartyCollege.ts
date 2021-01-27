import { EntityModel } from "@midwayjs/orm";
import { Column, Entity } from "typeorm";

@EntityModel('party_college')
@Entity("party_college", { schema: "test" })
export class PartyCollege {
  @Column("int", { primary: true, name: "ID" })
  id: number;
}
