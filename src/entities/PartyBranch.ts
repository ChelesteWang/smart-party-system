import { EntityModel } from "@midwayjs/orm";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TrainingInfo } from "./TrainingInfo";

@EntityModel('party_branch')
@Index("party_branch_no", ["partyBranchNo"], {})
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

  @Column("varchar", { name: "party_branch_no", length: 20 })
  partyBranchNo: string;

  @Column("int", { name: "party_group_type", nullable: true })
  partyGroupType: number | null;

  @Column("int", { name: "party_unit_type", nullable: true })
  partyUnitType: number | null;

  @Column("int", { name: "party_industry_type", nullable: true })
  partyIndustryType: number | null;

  @Column("date", { name: "party_create_time", nullable: true })
  partyCreateTime: string | null;

  @OneToMany(() => TrainingInfo, (trainingInfo) => trainingInfo.partyBranch)
  trainingInfos: TrainingInfo[];
}
