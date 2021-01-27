import { EntityModel } from "@midwayjs/orm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@EntityModel('party_type')
@Entity("party_type", { schema: "test" })
export class PartyType {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "illustration", length: 100 })
  illustration: string;
}
