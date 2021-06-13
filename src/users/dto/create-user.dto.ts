import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'mail'})
    @IsString({message: 'should be string'})
    @IsEmail({}, {message: "incorrect email"})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'password'})
    @IsString({message: 'should be string'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string;
}
