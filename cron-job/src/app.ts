import { AppDataSource } from "./data-source";
import { CronJob } from "cron";
import {
  getParserService,
  getProviderController,
} from "./factories/controllerFactory";
import { Provider } from "./entity/Provider";

const providerController = getProviderController(AppDataSource);
const parserService = getParserService();

AppDataSource.initialize()
  .then(async () => bootstrap())
  .catch((error) => console.log(error));

const bootstrap = () => {
  new CronJob(
    "*/5 * * * * *",
    async function () {
      providerController.run();
    },
    null,
    true,
    "America/Los_Angeles"
  );
};
