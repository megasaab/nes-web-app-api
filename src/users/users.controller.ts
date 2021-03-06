import {Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {User} from "./user.model";
import {Roles} from "../auth/role-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role-dto";
import {BanUserDto} from "./dto/ban-user.dto";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post('create-user')
    @UsePipes(ValidationPipe)
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

    @ApiOperation({summary: 'Give role'})
    @ApiResponse({status: 200})
    @Roles('Admin')
    @UseGuards(RolesGuard)
    @Post('add-role')
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }

    @ApiOperation({summary: 'Ban user'})
    @ApiResponse({status: 200})
    @Roles('Admin')
    @UseGuards(RolesGuard)
    @Post('ban')
    ban(@Body() dto: BanUserDto) {
        return this.userService.ban(dto);
    }
}
