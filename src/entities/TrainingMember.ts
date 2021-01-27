import { EntityModel } from "@midwayjs/orm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@EntityModel('training_member')
@Entity("training_member", { schema: "test" })
export class TrainingMember {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "training_id", comment: "培训ID" })
  trainingId: number;

  @Column("int", { name: "party_member_id", comment: "党员ID" })
  partyMemberId: number;

  @Column("int", { name: "training_type", nullable: true })
  trainingType: number | null;

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

  @Column("int", { name: "training_role", nullable: true })
  trainingRole: number | null;

  @Column("float", { name: "training_grade", nullable: true, precision: 12 })
  trainingGrade: number | null;

  @Column("datetime", { name: "training_begin_time", nullable: true })
  trainingBeginTime: Date | null;

  @Column("datetime", { name: "training_end_time", nullable: true })
  trainingEndTime: Date | null;

  @Column("datetime", { name: "training_time", nullable: true })
  trainingTime: Date | null;
}
