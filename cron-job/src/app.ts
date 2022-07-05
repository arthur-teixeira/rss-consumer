import { AppDataSource } from "./data-source";
import { CronJob } from "cron";
import {
  getFeedController,
  getProviderController,
} from "./factories/controllerFactory";

const providerController = getProviderController(AppDataSource);
const feedController = getFeedController(AppDataSource);

AppDataSource.initialize()
  .then(async () => bootstrap())
  .catch((error) => console.log(error));

const bootstrap = () => {
  new CronJob(
    "*/5 * * * * *",
    async function () {
      try {
        const feeds = await providerController.getArticlesFromProviders();
        feeds.forEach(async (feed) => {
          await feedController.saveFeed(feed);
        });
      } catch (err) {
        console.log(typeof err);
      }
    },
    null,
    true,
    "America/Los_Angeles"
  );
};
