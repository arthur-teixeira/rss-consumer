import Feed from "../domain/Feed";

export default interface FeedController {
  saveFeed(feed: Feed): void;
}
