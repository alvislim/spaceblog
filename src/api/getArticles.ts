import { useQuery } from "@tanstack/react-query";

interface Launch {
  launch_id: string;
  provider: string;
}

interface ArticleResult {
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

interface Article {
  count: number;
  next: string;
  previous?: string;
  results: ArticleResult[];
}

const fetchArticles = (): Promise<Article> => {
  return fetch("https://api.spaceflightnewsapi.net/v4/articles")
    .then((response) => response.json())
    .catch((e) => console.log(e));
};

const useArticle = () => {
  return useQuery<Article, Error>({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });
};

export default useArticle;
