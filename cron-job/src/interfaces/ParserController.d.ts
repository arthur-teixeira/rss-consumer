import Feed from "../domain/Feed";

export default interface ParserController {
  parseFeed(feed: string): Promise<Feed>;
}
