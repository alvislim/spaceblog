import Article from "../article";
import "./style.css";
import Box from "@mui/material/Box";
import { ArticleResult } from "../../type/article";
import React from "react";
import { CommentsPayload } from "../../type/comments";
import { dateFormat } from "../../utils";

type Props = {
  data?: ArticleResult[];
  commentsData?: CommentsPayload;
  isLoading: boolean;
  isError: boolean;
};

export const Articles = (props: Props) => {
  const { data, isError, isLoading, commentsData } = props;
  return (
    <Box
      height={"100%"}
      width={"100%"}
      gap={4}
      display='flex'
      flexDirection='column'>
      {!isLoading && data && !isError
        ? data.map((e) => {
            return (
              <Article
                sourceTitle={e.news_site}
                commentsData={commentsData}
                source={e.url}
                key={e.id}
                img={e.image_url}
                summary={e.summary}
                publishedDate={dateFormat(e.published_at)}
                title={e.title}
                id={e.id}
              />
            );
          })
        : null}
    </Box>
  );
};

export default React.memo(Articles);
