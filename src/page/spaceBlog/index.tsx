import useArticle from "../../api/getArticles";
import Articles from "../../component/articles";
import Box from "@mui/material/Box";
import TextInput from "../../component/textInput";
import { useEffect, useState } from "react";
import { ArticleResult } from "../../type/article";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const SpaceBlog = () => {
  const { data, isError, isLoading } = useArticle();
  const [articleArr, setArticleArr] = useState<ArticleResult[]>();
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (data && !isLoading && !isError) {
      setArticleArr(data.results);
    }
  }, [data, isLoading, isError]);

  useEffect(() => {
    if (data) {
      const timeOut = setTimeout(() => {
        if (input !== "") {
          const filteredArr = data.results.filter((e) =>
            e.title.toLowerCase().includes(input.toLowerCase())
          );
          setArticleArr(filteredArr);
        } else {
          setArticleArr(data.results);
        }
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [input]);

  const onInputChange = (val: string) => {
    setInput(val);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "#fff" }}>
          <Toolbar>
            <TextInput onChange={onInputChange} width={150} />
          </Toolbar>
        </AppBar>
      </Box>

      <Box display='flex' flexDirection='column' gap={4} mt={10}>
        {isLoading ? (
          <CircularProgress color='secondary' />
        ) : (
          <>
            <Articles
              data={articleArr}
              isError={isError}
              isLoading={isLoading}
            />
          </>
        )}
        {articleArr?.length === 0 ? (
          <Typography variant='body1' color='black'>
            No Results
          </Typography>
        ) : null}
      </Box>
    </>
  );
};

export default SpaceBlog;
