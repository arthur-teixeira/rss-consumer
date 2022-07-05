import "reflect-metadata";
import { DataSource } from "typeorm";
import { Article } from "./entity/Article";
import { Provider } from "./entity/Provider";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "rss",
  synchronize: true,
  logging: false,
  entities: [Provider, Article],
  migrations: [],
  subscribers: [],
});
