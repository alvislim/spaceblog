import { Link, useParams } from "react-router-dom";
import { useSpaceStore } from "../../store/spaceBlog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextInput from "../../component/textInput";
import { useState } from "react";
import Button from "@mui/material/Button";
import { postComment, useComments } from "../../api/comments";

const SpaceArticle = () => {
  const { articleId } = useParams();
  const { articleArr } = useSpaceStore();
  const article = articleArr?.filter((e) => e.id === Number(articleId))[0];
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const { data, refetch } = useComments();

  const onNameChange = (e: string) => {
    setName(e);
  };

  const onCommentChange = (e: string) => {
    setComment(e);
  };

  const onSubmit = async () => {
    if (articleId && comment && name) {
      try {
        await postComment(articleId, comment, name);
        refetch();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='start' gap={6}>
      <Button>
        <Link to='/'>Back</Link>
      </Button>
      <img
        height={"450px"}
        width={"100%"}
        alt='article-img'
        src={article?.image_url}
      />
      <Box
        display='flex'
        flexDirection='column'
        alignItems='start'
        width={"80%"}
        gap={4}
        p={5}
        justifyContent='center'>
        <Typography variant='h4' color='black' textAlign='left'>
          {article?.title}
        </Typography>
        <Typography variant='caption' color='black'>
          {article?.news_site}
        </Typography>
        <Typography
          mt={4}
          variant='h4'
          color='black'
          textAlign='left'
          sx={{ borderBottom: "1px solid black", width: "100%" }}>
          Comments
        </Typography>
        <TextInput onChange={onNameChange} input={name} label='Username' />
        <TextInput
          onChange={onCommentChange}
          input={comment}
          label='Comment'
          placeHolder='Write a comment...'
          multiline={true}
          rows={4}
        />
        <Button onClick={onSubmit}>Submit</Button>
        {data && data.payload && data.payload.comments
          ? data.payload.comments?.map((e) => {
              const dates = new Date(e.date);
              return (
                <Box
                  key={e.date}
                  color='black'
                  display='flex'
                  flexDirection='column'
                  alignItems='start'
                  gap={1}>
                  <Typography variant='h5'>{e.name}</Typography>
                  <Typography variant='caption'>{`${dates.getDate()}/${dates.getMonth()}/${dates.getFullYear()}`}</Typography>
                  <Typography variant='caption'>{e.comment}</Typography>
                </Box>
              );
            })
          : null}
      </Box>
    </Box>
  );
};

export default SpaceArticle;
