import { Column, Entity } from "typeorm";
import { EntityModel } from '@midwayjs/orm';

@Entity("user_login_token_log", { schema: "test" })
export class UserLoginTokenLog {
  @Column("varchar", { name: "id", nullable: true, length: 100 })
  id: string | null;

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

  @Column("varchar", { name: "path", nullable: true, length: 255 })
  path: string | null;
}
