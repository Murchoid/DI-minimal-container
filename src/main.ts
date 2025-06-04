import { AppService } from "./services/app.service";
import { Container } from "./container";

const container = new Container();
const appService = container.resolve(AppService);

appService.run();
