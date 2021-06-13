import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {User} from "./user.model";
import {Roles} from "../auth/role-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post('create-user')
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get user list'})
    @ApiResponse({status: 200, type: [User]})
    @Roles('Admin')
    @UseGuards(RolesGuard)
    @Get('get-all-users')
    getAll() {
        return this.userService.getAllUsers();
    }
}
