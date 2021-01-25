import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EntityModel } from '@midwayjs/orm';

@EntityModel('training_info')
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

  @Column("varchar", { name: "TRAINING_TIME", comment: "培训时间", length: 30 })
  trainingTime: string;

  @Column("int", { name: "TRAINING_CREDIT_HOUR", comment: "培训学时" })
  trainingCreditHour: number;

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
    name: "CREATE_TIME",
    nullable: true,
    comment: "创建时间",
    length: 100,
  })
  createTime: string | null;

  @Column("varchar", {
    name: "RESERVE2",
    nullable: true,
    comment: "备用字段",
    length: 100,
  })
  reserve2: string | null;
}
