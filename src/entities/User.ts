import { Column, Entity } from "typeorm";
import { EntityModel } from '@midwayjs/orm';

@EntityModel('user')
@Entity("user", { schema: "test" })
export class User {
  @Column("int", { primary: true, name: "uid", comment: "id", unsigned: true })
  uid: number;

  @Column("varchar", { name: "username", comment: "用户名", length: 100 })
  username: string;

  @Column("varchar", { name: "password", comment: "密码", length: 40 })
  password: string;

  @Column("int", { name: "identity", nullable: true, comment: "账号身份" })
  identity: number | null;

  @Column("varchar", {
    name: "reserve1",
    nullable: true,
    comment: "备用字段",
    length: 255,
  })
  reserve1: string | null;

  @Column("varchar", {
    name: "reserve2",
    nullable: true,
    comment: "备用字段",
    length: 255,
  })
  reserve2: string | null;
}
