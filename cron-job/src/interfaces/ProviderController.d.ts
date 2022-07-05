import Feed from "../domain/Feed";
export default interface ProviderController {
  getArticlesFromProviders(): Promise<Feed[]>;
}
