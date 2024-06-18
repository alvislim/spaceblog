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
import { useInView } from "react-intersection-observer";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const SpaceBlog = () => {
  const [limit, setLimit] = useState<number>(10);
  const { ref, inView } = useInView({ threshold: 0.4 });

  const { data, isError, isLoading, refetch } = useArticle(limit);
  const [articleArr, setArticleArr] = useState<ArticleResult[]>();
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (inView) {
      setLimit((limit) => limit + 10);
      refetch();
    }
  }, [inView]);

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
            <DateRangePicker
              value={[
                new Date("2025-02-01 00:00:00"),
                new Date("2025-03-01 23:59:59"),
              ]}
              //   onChange={setValue}
              showMeridian
              format='yyyy-MM-dd HH:mm:ss'
              defaultCalendarValue={[
                new Date("2025-02-01 00:00:00"),
                new Date("2025-03-01 23:59:59"),
              ]}
            />
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        gap={4}
        mt={10}
        justifyContent='center'
        alignItems='center'>
        {isLoading ? (
          <CircularProgress color='secondary' />
        ) : (
          <>
            <Articles
              data={articleArr}
              isError={isError}
              isLoading={isLoading}
            />
            <div ref={ref} />
            <CircularProgress color='secondary' />
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
