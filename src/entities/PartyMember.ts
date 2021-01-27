import { EntityModel } from "@midwayjs/orm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@EntityModel('party_member')
@Entity("party_member", { schema: "test" })
export class PartyMember {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", comment: "姓名", length: 100 })
  name: string;

  @Column("int", { name: "gender", comment: "性别" })
  gender: number;

  @Column("varchar", { name: "nationality", comment: "民族", length: 100 })
  nationality: string;

  @Column("varchar", {
    name: "class_grade",
    nullable: true,
    comment: "班级（非必填）",
    length: 100,
  })
  classGrade: string | null;

  @Column("varchar", {
    name: "political_status",
    comment: "政治面貌",
    length: 100,
  })
  politicalStatus: string;

  @Column("varchar", { name: "birthday", comment: "出生年月", length: 30 })
  birthday: string;

  @Column("varchar", { name: "join_time", comment: "入党时间", length: 30 })
  joinTime: string;

  @Column("varchar", {
    name: "positive_time",
    nullable: true,
    comment: "转正时间（非必填）",
    length: 30,
  })
  positiveTime: string | null;

  @Column("varchar", { name: "tel", comment: "联系方式", length: 100 })
  tel: string;

  @Column("int", { name: "credit_hour", comment: "已学学时" })
  creditHour: number;

  @Column("int", { name: "party_branch_id", comment: "所在支部" })
  partyBranchId: number;

  @Column("varchar", {
    name: "reserve1",
    nullable: true,
    comment: "备用字段",
    length: 100,
  })
  reserve1: string | null;

  @Column("varchar", {
    name: "reserve2",
    nullable: true,
    comment: "备用字段",
    length: 100,
  })
  reserve2: string | null;

  @Column("int", { name: "type", nullable: true, comment: "删除" })
  type: number | null;

  @Column("int", { name: "committee", nullable: true, comment: "是否支部委员" })
  committee: number | null;
}
