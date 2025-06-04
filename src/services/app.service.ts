import { LoggerService } from "./logger.service";
import { Injectable } from "../decorators/injectable";
import { UserService } from "./user.service";

@Injectable()
export class AppService{
    constructor(private log: LoggerService, private userService: UserService){}
    run(){
        const users = this.userService.getUsers();

        for(let user of users){
            this.log.log(Object.entries(user));
            console.log();
        }
    }
}