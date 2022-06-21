export default interface ParserService {
  parseFeed(feed: string): Promise<any>;
}
