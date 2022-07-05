import { Repository, DataSource } from "typeorm";
import Feed from "../domain/Feed";
import { Article } from "../entity/Article";
import FeedController from "../interfaces/FeedController";

export default class FeedControllerImpl implements FeedController {
  private articleRepository: Repository<Article>;

  constructor(dataSource: DataSource) {
    this.articleRepository = dataSource.manager.getRepository(Article);
  }
  async saveFeed(feed: Feed): Promise<void> {
    const articles = this.buildArticleEntity(feed);
    articles.forEach(async (article) => {
      try {
        await this.articleRepository.save(article);
      } catch (error) {
        if (!error.message.includes("duplicate key")) {
          console.error(error);
        }
      }
    });
  }

  private buildArticleEntity(feed: Feed): Article[] {
    return feed.items.map((article) => {
      return {
        content: article.content,
        description: article.description,
        link: article.link,
        published: new Date(article.published),
        title: article.title,
      };
    });
  }
}
