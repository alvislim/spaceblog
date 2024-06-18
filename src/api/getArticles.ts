import { useQuery } from "@tanstack/react-query";
import { articleURL } from "../constant";
import { ArticleProps } from "../type/article";

const fetchArticles = (limit: number): Promise<ArticleProps> => {
  return fetch(`${articleURL}?limit=${limit}`)
    .then((response) => response.json())
    .catch((e) => console.log(e));
};

const useArticle = (limit: number) => {
  return useQuery<ArticleProps, Error>({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(limit),
  });
};

export default useArticle;
