import { useQuery } from "@tanstack/react-query";
import { articleURL } from "../constant";
import { ArticleProps } from "../type/article";

const fetchArticles = (): Promise<ArticleProps> => {
  return fetch(articleURL)
    .then((response) => response.json())
    .catch((e) => console.log(e));
};

const useArticle = () => {
  return useQuery<ArticleProps, Error>({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });
};

export default useArticle;
