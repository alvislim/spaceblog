import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { CommentsPayload } from "../../type/comments";

type Props = {
  img: string;
  title: string;
  summary: string;
  publishedDate: string;
  id: number;
  source?: string;
  sourceTitle: string;
  commentsData?: CommentsPayload;
};

const Article = (props: Props) => {
  const { img, title, summary, publishedDate, id, sourceTitle, commentsData } =
    props;

  const commentLength = () => {
    if (commentsData) {
      const length = commentsData.payload.filter(
        (e) => e.commentId === id.toString()
      );
      if (length && length[0]) {
        return length[0].comments.length;
      }
    }
    return 0;
  };

  return (
    <Link to={`article/${id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 900 }} key={id}>
        <Box
          display='flex'
          gap={2}
          sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Box p={2}>
            <CardMedia
              title='article-img'
              image={img}
              sx={{
                width: { xs: "100%", md: 350 },
                height: { xs: 300, md: "100%" },
                mid: "auto",
              }}
            />
          </Box>
          <CardContent>
            <Box
              display='flex'
              flexDirection='column'
              gap={4}
              alignItems='start'>
              <Box textAlign='left'>
                <Typography
                  variant='h6'
                  component='div'
                  sx={{ textAlign: "left" }}>
                  {title}
                </Typography>
                <Typography variant='caption'>{sourceTitle}</Typography>
              </Box>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ textAlign: "left" }}>
                {summary}
              </Typography>
              <Typography variant='caption'>{publishedDate}</Typography>
              <Typography variant='caption'>{`Comments ${commentLength()}`}</Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default Article;
