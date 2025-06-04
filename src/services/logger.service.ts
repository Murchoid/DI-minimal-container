import { Injectable } from "../decorators/injectable";
import chalk from "chalk"; 

@Injectable()
export class LoggerService{

    private logger = console.log;

    log(message: unknown): void{
        this.logger(chalk.greenBright("[logger] ", message));
    }
}