import ParserService from "../interfaces/ParserService";
import { parse as parseRss } from "rss-to-json";

export default class ParserServiceImpl implements ParserService {
  async parseFeed(feed: string): Promise<any> {
    const converted = await parseRss(feed, {});
    console.log(converted);
  }
}
