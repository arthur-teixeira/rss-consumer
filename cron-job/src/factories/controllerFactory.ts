import { DataSource } from "typeorm";
import ProviderControllerImpl from "../controllers/ProviderControllerImpl";
import ParserService from "../interfaces/ParserService";
import ProviderController from "../interfaces/ProviderController";
import ParserServiceImpl from "../services/ParserServiceImpl";

export const getProviderController = (
  appDataSource: DataSource
): ProviderController => {
  return new ProviderControllerImpl(appDataSource);
};

export const getParserService = (): ParserService => {
  return new ParserServiceImpl();
};
