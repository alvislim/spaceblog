import useArticle from "../../api/getArticles";
import Articles from "../../component/articles";

const SpaceBlog = () => {
  const { data, isError, isLoading } = useArticle();

  return <Articles data={data} isError={isError} isLoading={isLoading} />;
};

export default SpaceBlog;
