import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel('user')
export class user {
    @PrimaryGeneratedColumn()
    uid: number;
    @Column()
    username: String;
    @Column()
    password: String;
    @Column()
    identity: number
    @Column()
    reserve1:String
    @Column()
    reserve2:String
}