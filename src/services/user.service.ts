import { Injectable } from "../decorators/injectable";
import mockdata from "../mocks/users.mockdb.json";
import { LoggerService } from "./logger.service";
import { IUser } from "../interfaces/user.interface";

@Injectable()
export class UserService{
    constructor(private log: LoggerService){}

    getUsers(): IUser[]{
        this.log.log("Fetching users...");

        let users: IUser[] = [];
        if(mockdata){
            for(let user of mockdata){
            users.push(user);
        }
        }
        return users;
    }
}