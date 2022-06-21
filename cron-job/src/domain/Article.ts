type ArticleProps = {
  title: string;
  description: string;
  link: string;
  published: number;
  created: number;
  category: any[];
  enclosures: any[];
  media: any;
};

export default class Article {
  title: string;
  description: string;
  link: string;
  published: Date;
  created: Date;
  category: any[];
  enclosures: any[];
  media: any;

  constructor({
    title,
    description,
    link,
    published,
    created,
    category,
    enclosures,
    media,
  }: ArticleProps) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.published = new Date(published);
    this.created = new Date(created);
    this.category = category;
    this.enclosures = enclosures;
    this.media = media;
  }
}
