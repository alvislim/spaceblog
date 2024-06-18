import useArticle from "../../api/getArticles";
import CircularProgress from "@mui/material/CircularProgress";
import Article from "../article";
import "./style.css";
import Box from "@mui/material/Box";

export const Articles = () => {
  const { data, isError, isLoading } = useArticle();
  return (
    <Box
      height={"100%"}
      width={"100%"}
      gap={4}
      display='flex'
      flexDirection='column'>
      {isLoading ? <CircularProgress color='inherit' /> : null}
      {!isLoading && data && !isError
        ? data.results.map((e) => {
            return (
              <Article
                key={e.id}
                img={e.image_url}
                summary={e.summary}
                publishedDate={e.published_at}
                title={e.title}
                id={e.id}
              />
            );
          })
        : null}
    </Box>
  );
};

export default Articles;
