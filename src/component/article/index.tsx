import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

type Props = {
  img: string;
  title: string;
  summary: string;
  publishedDate: string;
  id: number;
  source?: string;
  sourceTitle: string;
};

const Article = (props: Props) => {
  const { img, title, summary, publishedDate, id, sourceTitle } = props;
  return (
    <Link to={`article/${id}`}>
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
                <Typography variant='caption'>
                  {/* <a href={source} target='_blank' rel='noreferrer'> */}
                  {sourceTitle}
                  {/* </a> */}
                </Typography>
              </Box>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ textAlign: "left" }}>
                {summary}
              </Typography>
              <Typography variant='caption'>{publishedDate}</Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};

export default Article;
