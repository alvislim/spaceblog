import { useQuery } from "@tanstack/react-query";
import { articleURL } from "../constant";
import { Article } from "../type/article";

const fetchArticles = (): Promise<Article> => {
  return fetch(articleURL)
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
