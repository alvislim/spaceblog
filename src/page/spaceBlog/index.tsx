import useArticle from "../../api/getArticles";
import Articles from "../../component/articles";
import Box from "@mui/material/Box";
import TextInput from "../../component/textInput";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useInView } from "react-intersection-observer";
import DateRangePicker from "../../component/dateRangePicker";
import { useSpaceStore } from "../../store/spaceBlog";
import { useComments, useMatrix } from "../../api/comments";
import CommentsMatrix from "../../component/commentsMatrix";
import AvgCommentMatrix from "../../component/AvgCommetMatrix";

const SpaceBlog = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });

  const { articleArr, setArticleArr, limit, setLimit } = useSpaceStore();
  const { data, isError, isLoading, refetch, isRefetching } = useArticle(limit);
  const [input, setInput] = useState<string>("");
  const [dates, setDates] = useState<[Date, Date] | null>(null);
  const { data: commentsData } = useComments();
  const { data: commentsMatrix } = useMatrix();

  const UserCommentMatrix = () => {
    if (commentsMatrix && !isLoading) {
      if (
        commentsMatrix.payload &&
        commentsMatrix.payload.userComment.length > 0 &&
        commentsMatrix.payload.dateComment.length > 0
      ) {
        console.log(commentsMatrix.payload.dateComment);
        const dateCommentLength = commentsMatrix.payload.dateComment.length;
        const totalComments = commentsMatrix?.payload.dateComment[0].comments;
        const avgPerDay = totalComments / dateCommentLength;
        const sortedComments = commentsMatrix?.payload.userComment.sort(
          (a, b) => (b.comments > a.comments ? 1 : -1)
        );
        return (
          <Box
            sx={{ width: "100%" }}
            display='flex'
            justifyContent='space-between'
            gap={4}>
            <CommentsMatrix
              title='Top 3 Commenters'
              arr={sortedComments}
              limit={3}
            />
            <AvgCommentMatrix
              title='Average Comments/Day'
              value={avgPerDay}
              subtitle='comments'
            />
          </Box>
        );
      }
    } else {
      return null;
    }
  };

  const onClean = () => {
    if (data) {
      setArticleArr(data.results);
      setDates(null);
    }
  };

  const onChangeDate = (value: [Date, Date] | null) => {
    if (value) {
      value[1];
      setDates([
        new Date(value[0].setHours(0, 0, 0, 0)),
        new Date(value[1].setHours(23, 59, 59)),
      ]);
    }
  };

  useEffect(() => {
    if (inView && articleArr && articleArr.length >= 10 && !isRefetching) {
      setLimit(limit + 10);
    }
  }, [inView]);

  useEffect(() => {
    refetch();
  }, [limit]);

  useEffect(() => {
    if (data && !isLoading && !isError) {
      setArticleArr(data.results);
    }
  }, [data, isLoading, isError]);

  useEffect(() => {
    if (input !== "" && dates && articleArr) {
      const filteredArr = articleArr.filter(
        (e) =>
          new Date(e.published_at) >= dates[0] &&
          new Date(e.published_at) <= dates[1]
      );
      setArticleArr(filteredArr);
    }
    if (input === "" && data && dates) {
      const filteredArr = data.results.filter(
        (e) =>
          new Date(e.published_at) >= dates[0] &&
          new Date(e.published_at) <= dates[1]
      );
      setArticleArr(filteredArr);
    }
  }, [dates, data]);

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
            <DateRangePicker
              value={dates}
              onChange={onChangeDate}
              onClean={onClean}
            />
            <Box sx={{ flexGrow: 1 }} />
            <TextInput
              onChange={onInputChange}
              width={150}
              input={input}
              label='Search'
            />
          </Toolbar>
        </AppBar>
      </Box>
      {UserCommentMatrix()}
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
              commentsData={commentsData}
              data={articleArr}
              isError={isError}
              isLoading={isLoading}
            />
            <div ref={ref} />
            {isRefetching ? <CircularProgress color='secondary' /> : null}
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
