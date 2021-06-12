import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {User} from "./user.model";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get user list'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }
}
