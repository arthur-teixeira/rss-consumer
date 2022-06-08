import { DataSource, Repository } from "typeorm";
import { Provider } from "../entity/Provider";
import ProviderController from "../interfaces/ProviderController";

export default class ProviderControllerImpl implements ProviderController {
    private providerRepository: Repository<Provider>;

    constructor(dataSource: DataSource) {
        this.providerRepository = dataSource.manager.getRepository(Provider);
    }

    getProviders() {
        return this.providerRepository.find();
    }
}