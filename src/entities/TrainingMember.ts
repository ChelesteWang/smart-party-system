import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EntityModel } from '@midwayjs/orm';

@EntityModel('training_member')
@Entity("training_member", { schema: "test" })
export class TrainingMember {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "TRAINING_ID", comment: "培训ID" })
  trainingId: number;

  @Column("int", { name: "PARTY_MEMBER_ID", comment: "党员ID" })
  partyMemberId: number;

  @Column("int", { name: "type", nullable: true, comment: "审核状态" })
  type: number | null;

  @Column("varchar", {
    name: "RESERVE1",
    nullable: true,
    comment: "备用字段",
    length: 100,
  })
  reserve1: string | null;

  @Column("varchar", {
    name: "RESERVE2",
    nullable: true,
    comment: "备用字段",
    length: 100,
  })
  reserve2: string | null;
}
