import ParserController from "../interfaces/ParserController";
import { parse as parseRss } from "rss-to-json";
import Feed from "../domain/Feed";

export default class ParserControllerImpl implements ParserController {
  async parseFeed(feed: string): Promise<Feed> {
    return parseRss(feed, {});
  }
}
