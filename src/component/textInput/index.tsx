import TextField from "@mui/material/TextField";

type Props = {
  onChange: (val: string) => void;
  width?: number;
};
const TextInput = (props: Props) => {
  const { onChange, width } = props;
  return (
    <TextField
      id='standard-basic'
      label='Search'
      variant='standard'
      onChange={(e) => onChange(e.target.value)}
      sx={{
        width: width ? width : "100%",
      }}
    />
  );
};

export default TextInput;
