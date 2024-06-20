import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { UserComment } from "../../type/comments";

type Props = {
  title: string;
  arr: UserComment[];
  limit: number;
};

const CommentsMatrix = (props: Props) => {
  const { title, arr, limit } = props;
  return (
    <Box
      color='black'
      mt={8}
      display='flex'
      flexDirection='column'
      p={2}
      sx={{
        width: "50%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
      gap={2}>
      <Typography variant='h5'>{title}</Typography>
      {arr.map((e, i) => {
        if (i < limit) {
          return (
            <Box
              key={e._id}
              sx={{ width: "100%" }}
              display='flex'
              justifyContent='space-evenly'>
              <Typography variant='caption'>{e.userName}</Typography>
              <Typography variant='caption'>{e.comments} Comments</Typography>
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default CommentsMatrix;
