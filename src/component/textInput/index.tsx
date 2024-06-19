import TextField from "@mui/material/TextField";

type Props = {
  onChange: (val: string) => void;
  width?: number;
  input: string;
  label: string;
};
const TextInput = (props: Props) => {
  const { onChange, width, input, label } = props;
  return (
    <TextField
      id='standard-basic'
      label={label}
      variant='standard'
      onChange={(e) => onChange(e.target.value)}
      value={input}
      sx={{
        width: width ? width : "100%",
      }}
    />
  );
};

export default TextInput;
