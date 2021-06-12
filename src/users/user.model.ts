import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface  UserCreationAttrs {
    email: string;
    password: string;
}


@Table({tableName: 'users'})
export class User extends  Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'example@gmail.com', description: 'unique email'})
    @Column({type: DataType.STRING, unique: true , allowNull: false})
    email: string;

    @ApiProperty({example: '12345', description: 'password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'off permission'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'true', description: 'reason for ban'})
    @Column({type: DataType.BOOLEAN, allowNull: true})
    banReason: boolean;
}
