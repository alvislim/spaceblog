import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  value: Number;
  subtitle: string;
};
const AvgCommentMatrix = (props: Props) => {
  const { title, value, subtitle } = props;

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
      <Box>
        <Typography variant='h2'>{value.toString()}</Typography>
        <Typography variant='caption'>{subtitle}</Typography>
      </Box>
    </Box>
  );
};

export default AvgCommentMatrix;
