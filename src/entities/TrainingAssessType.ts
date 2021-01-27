import { EntityModel } from "@midwayjs/orm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@EntityModel('training_assess_type')
@Entity("training_assess_type", { schema: "test" })
export class TrainingAssessType {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "illustration", length: 100 })
  illustration: string;
}
