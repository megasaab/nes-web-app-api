import {Controller, Get} from '@nestjs/common';
import {AppService} from "./app.service";

@Controller('api/v1')
export class AppController {

    constructor(private appService: AppService) {
    }

    @Get('/get-users')
    getUsers() {
       return this.appService.getUsers();
    }
}
