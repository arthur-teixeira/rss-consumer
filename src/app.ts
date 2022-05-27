import { AppDataSource } from "./data-source";
import { CronJob } from "cron";

AppDataSource.initialize()
  .then(async () => {
    const job = new CronJob(
      "* * * * * *",
      function () {
        console.log("cron");
      },
      null,
      true,
      "America/Los_Angeles"
    );
  })
  .catch((error) => console.log(error));
