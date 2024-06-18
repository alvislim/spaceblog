import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {
  img: string;
  title: string;
  summary: string;
  publishedDate: string;
  id: number;
};

const Article = (props: Props) => {
  const { img, title, summary, publishedDate, id } = props;
  return (
    <Card sx={{ maxWidth: 900 }} key={id}>
      <Box display='flex' gap={2}>
        <img alt='article-img' height='auto' width='300' src={img} />
        <CardContent>
          <Box display='flex' flexDirection='column' gap={4}>
            <Typography variant='h5' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {summary}
            </Typography>
            <Typography>{publishedDate}</Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Article;
