import { EntityModel } from "@midwayjs/orm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@EntityModel('training_state_type')
@Entity("training_state_type", { schema: "test" })
export class TrainingStateType {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "illustration", length: 100 })
  illustration: string;
}
