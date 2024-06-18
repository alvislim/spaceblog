import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
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
          <Box display='flex' flexDirection='column' gap={4} alignItems='start'>
            <Typography variant='h5' component='div' sx={{ textAlign: "left" }}>
              {title}
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ textAlign: "left" }}>
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
