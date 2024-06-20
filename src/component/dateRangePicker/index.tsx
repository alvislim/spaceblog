import { DateRangePicker as DatePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./index.css";

type Props = {
  value: [Date, Date] | null;
  onChange: (value: [Date, Date] | null) => void;
  onClean: () => void;
};

const DateRangePicker = (props: Props) => {
  const { value, onChange, onClean } = props;
  return (
    <DatePicker
      placeholder='Select Date Range'
      preventOverflow
      onClean={onClean}
      className='date-picker'
      value={value}
      onChange={onChange}
      format='yyyy-MM-dd'
    />
  );
};

export default DateRangePicker;
