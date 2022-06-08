import { DataSource } from "typeorm";
import ProviderControllerImpl from "../controllers/ProviderControllerImpl";
import ProviderController from "../interfaces/ProviderController";

export const getProviderController = (appDataSource: DataSource): ProviderController => {
    return new ProviderControllerImpl(appDataSource);
}