import { DataSource, Repository } from "typeorm";
import Feed from "../domain/Feed";
import { Provider } from "../entity/Provider";
import { getParserController } from "../factories/controllerFactory";
import ParserController from "../interfaces/ParserController";
import ProviderController from "../interfaces/ProviderController";

export default class ProviderControllerImpl implements ProviderController {
  private providerRepository: Repository<Provider>;
  private parserController: ParserController;

  constructor(dataSource: DataSource) {
    this.providerRepository = dataSource.manager.getRepository(Provider);
    this.parserController = getParserController();
  }

  async getArticlesFromProviders() {
    const providers = await this.getProviders();

    let allArticles: Feed[] = [];

    for (const provider of providers) {
      const articles = await this.getArticlesFromProvider(provider);
      allArticles.push(articles);
    }

    return allArticles;
  }

  private getProviders() {
    return this.providerRepository.find();
  }

  private async getArticlesFromProvider(provider: Provider) {
    return this.parserController.parseFeed(provider.url);
  }
}
