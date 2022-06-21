import { DataSource, Repository } from "typeorm";
import { Provider } from "../entity/Provider";
import { getParserService } from "../factories/controllerFactory";
import ParserService from "../interfaces/ParserService";
import ProviderController from "../interfaces/ProviderController";

export default class ProviderControllerImpl implements ProviderController {
  private providerRepository: Repository<Provider>;
  private parserService: ParserService;

  constructor(dataSource: DataSource) {
    this.providerRepository = dataSource.manager.getRepository(Provider);
    this.parserService = getParserService();
  }

  async getArticlesFromProviders() {
    const providers = await this.getProviders();

    providers.forEach((provider) => {
      this.getArticlesFromProvider(provider);
    });
  }

  private getProviders() {
    return this.providerRepository.find();
  }

  private getArticlesFromProvider(provider: Provider) {
    const rssFeed = this.parseFeed(provider.url);
  }

  private parseFeed(providerUrl: string) {
    return this.parserService.parseFeed(providerUrl);
  }

  private parseArticles() {}
}
