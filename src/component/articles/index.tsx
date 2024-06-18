import useArticle from "../../api/getArticles";

export const Articles = () => {
  const { data, isError, isLoading } = useArticle();

  return <div>helloworld</div>;
};

export default Articles;
