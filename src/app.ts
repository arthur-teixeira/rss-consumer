import { CronJob } from "cron";

const job = new CronJob(
  "* * * * * *",
  function () {
    console.log("cron");
  },
  null,
  true,
  "America/Los_Angeles"
);
