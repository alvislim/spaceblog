import { Link, useParams } from "react-router-dom";
import { useSpaceStore } from "../../store/spaceBlog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextInput from "../../component/textInput";
import { useState } from "react";
import Button from "@mui/material/Button";

const SpaceArticle = () => {
  const { articleId } = useParams();
  const { articleArr } = useSpaceStore();
  const article = articleArr?.filter((e) => e.id === Number(articleId))[0];
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const onNameChange = (e: string) => {
    setName(e);
  };

  const onCommentChange = (e: string) => {
    setComment(e);
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
      </Box>
    </Box>
  );
};

export default SpaceArticle;
