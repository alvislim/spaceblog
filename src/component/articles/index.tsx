import Article from "../article";
import "./style.css";
import Box from "@mui/material/Box";
import { ArticleResult } from "../../type/article";

type Props = {
  data?: ArticleResult[];
  isLoading: boolean;
  isError: boolean;
};

export const Articles = (props: Props) => {
  const { data, isError, isLoading } = props;
  return (
    <Box
      height={"100%"}
      width={"100%"}
      gap={4}
      display='flex'
      flexDirection='column'>
      {!isLoading && data && !isError
        ? data.map((e) => {
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
