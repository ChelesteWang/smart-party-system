import { Column, Entity } from "typeorm";
import { EntityModel } from '@midwayjs/orm';

@EntityModel('user_token')
@Entity("user_token", { schema: "test" })
export class UserToken {
  @Column("varchar", { primary: true, name: "id", length: 100 })
  id: string;

  @Column("varchar", { name: "username", nullable: true, length: 100 })
  username: string | null;

  @Column("int", { name: "identity", nullable: true })
  identity: number | null;

  @Column("varchar", { name: "token", nullable: true, length: 100 })
  token: string | null;

  @Column("datetime", { name: "expireTime", nullable: true })
  expireTime: Date | null;

  @Column("datetime", { name: "loginTime", nullable: true })
  loginTime: Date | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;
}
