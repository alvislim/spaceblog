import useArticle from "../../api/getArticles";
import Articles from "../../component/articles";
import Box from "@mui/material/Box";
import TextInput from "../../component/textInput";
import { useEffect, useState } from "react";
import { ArticleResult } from "../../type/article";
import CircularProgress from "@mui/material/CircularProgress";

const SpaceBlog = () => {
  const { data, isError, isLoading } = useArticle();
  const [articleArr, setArticleArr] = useState<ArticleResult[]>();
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (input !== "" && data) {
      const filteredArr = data.results.filter((e) =>
        e.title.toLowerCase().includes(input.toLowerCase())
      );
      setArticleArr(filteredArr);
    }
  }, [input]);

  const onInputChange = (val: string) => {
    setInput(val);
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress color='secondary' />
      ) : (
        <Box display='flex' flexDirection='column' gap={4}>
          <TextInput onChange={onInputChange} width={150} />
          <Articles
            data={articleArr ? articleArr : data?.results}
            isError={isError}
            isLoading={isLoading}
          />
        </Box>
      )}
    </>
  );
};

export default SpaceBlog;
