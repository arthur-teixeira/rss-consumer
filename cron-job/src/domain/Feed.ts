import Article from "./Article";

export default class Feed {
  title: string;
  description: string;
  link: string;
  image: string;
  category: any[];
  items: Article[];
}
