export interface Launch {
  launch_id: string;
  provider: string;
}

export interface ArticleResult {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Launch[];
  events: any[];
}

export interface Article {
  count: number;
  next: string;
  previous?: string;
  results: ArticleResult[];
}
