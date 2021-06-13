
import {User} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role-dto";
import {BanUserDto} from "./dto/ban-user.dto";


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService
        ) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('User');
        await user.$set('roles',[role.id])
        user.roles = [role];
        return user;
    }

    async getAllUsers() {
        const user = await  this.userRepository.findAll({include: {all: true}});
        return user;
    }

    async getUsersByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}});
        return user;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if(role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('user or role not found', HttpStatus.NOT_FOUND);
    }

    async ban(dto: BanUserDto) {

    }
}
