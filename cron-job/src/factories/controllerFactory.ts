import { DataSource } from "typeorm";
import ProviderControllerImpl from "../controllers/ProviderControllerImpl";
import ParserController from "../interfaces/ParserController";
import ProviderController from "../interfaces/ProviderController";
import ParserControllerImpl from "../controllers/ParserControllerImpl";
import FeedController from "../interfaces/FeedController";
import FeedControllerImpl from "../controllers/FeedControllerImpl";

export const getProviderController = (
  appDataSource: DataSource
): ProviderController => {
  return new ProviderControllerImpl(appDataSource);
};

export const getParserController = (): ParserController => {
  return new ParserControllerImpl();
};

export const getFeedController = (
  appDataSource: DataSource
): FeedController => {
  return new FeedControllerImpl(appDataSource);
};
