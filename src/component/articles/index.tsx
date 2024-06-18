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
            const newDate = new Date(e.published_at);
            const date = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
            return (
              <Article
                sourceTitle={e.news_site}
                source={e.url}
                key={e.id}
                img={e.image_url}
                summary={e.summary}
                publishedDate={date}
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
