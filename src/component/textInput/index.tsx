import TextField from "@mui/material/TextField";

type Props = {
  onChange: (val: string) => void;
  width?: number;
  input: string;
  label: string;
  multiline?: boolean;
  rows?: number;
  placeHolder?: string;
};
const TextInput = (props: Props) => {
  const { onChange, width, input, label, rows, multiline, placeHolder } = props;
  return (
    <TextField
      placeholder={placeHolder}
      rows={rows ?? 0}
      multiline={multiline}
      id={label}
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
