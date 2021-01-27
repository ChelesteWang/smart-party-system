import { EntityModel } from "@midwayjs/orm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@EntityModel('training_role_type')
@Entity("training_role_type", { schema: "test" })
export class TrainingRoleType {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "illustration", length: 100 })
  illustration: string;
}
