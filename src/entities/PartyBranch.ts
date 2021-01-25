import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EntityModel } from '@midwayjs/orm';

@EntityModel('party_branch')
@Entity("party_branch", { schema: "test" })
export class PartyBranch {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", {
    name: "PARTY_BRANCH_NAME",
    comment: "党支部名字",
    length: 100,
  })
  partyBranchName: string;

  @Column("int", { name: "number", nullable: true, comment: "支部编码" })
  number: number | null;

  @Column("varchar", {
    name: "RESERVE2",
    nullable: true,
    comment: "备用字段",
    length: 100,
  })
  reserve2: string | null;

  @Column("varchar", {
    name: "RESERVE3",
    nullable: true,
    comment: "备用字段",
    length: 100,
  })
  reserve3: string | null;

  @Column("int", { name: "status", nullable: true, comment: "delete status" })
  status: number | null;
}
