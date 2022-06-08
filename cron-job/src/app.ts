import { AppDataSource } from "./data-source";
import { CronJob } from "cron";
import { getProviderController } from "./factories/controllerFactory";

const providerController = getProviderController(AppDataSource);

AppDataSource.initialize()
  .then(async () => {
    new CronJob(
      "* * * * * *",
      async function () {
        const providers = await providerController.getProviders();
        console.log(providers);
      },
      null,
      true,
      "America/Los_Angeles"
    );
  })
  .catch((error) => console.log(error));
