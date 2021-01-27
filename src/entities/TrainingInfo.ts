import { EntityModel } from "@midwayjs/orm";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PartyBranch } from "./PartyBranch";

@EntityModel('training_info')
@Index("PARTY_BRANCH_ID", ["partyBranchId"], {})
@Entity("training_info", { schema: "test" })
export class TrainingInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "PARTY_BRANCH_ID", comment: "所在党支部" })
  partyBranchId: number;

  @Column("varchar", {
    name: "TRAINING_THEME",
    comment: "培训主题",
    length: 100,
  })
  trainingTheme: string;

  @Column("datetime", { name: "training_create_time", nullable: true })
  trainingCreateTime: Date | null;

  @Column("datetime", { name: "training_time", nullable: true })
  trainingTime: Date | null;

  @Column("varchar", {
    name: "TRAINING_UNIT",
    comment: "培训单位",
    length: 100,
  })
  trainingUnit: string;

  @Column("varchar", {
    name: "ATTACHMENT",
    nullable: true,
    comment: "培训附件",
    length: 100,
  })
  attachment: string | null;

  @Column("varchar", {
    name: "REMARK",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;

  @Column("int", { name: "CHECK_STATUS", comment: "审核状态" })
  checkStatus: number;

  @Column("varchar", {
    name: "RESERVE2",
    nullable: true,
    comment: "备用字段",
    length: 100,
  })
  reserve2: string | null;

  @Column("datetime", { name: "training_begin_time", nullable: true })
  trainingBeginTime: Date | null;

  @Column("datetime", { name: "training_end_time", nullable: true })
  trainingEndTime: Date | null;

  @Column("int", { name: "training_assess_type", nullable: true })
  trainingAssessType: number | null;

  @ManyToOne(() => PartyBranch, (partyBranch) => partyBranch.trainingInfos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "PARTY_BRANCH_ID", referencedColumnName: "id" }])
  partyBranch: PartyBranch;
}
