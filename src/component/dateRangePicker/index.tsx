import { DateRangePicker as DatePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./index.css";

type Props = {
  value: [Date, Date] | null;
  onChange: (value: [Date, Date] | null) => void;
};

const DateRangePicker = (props: Props) => {
  const { value, onChange } = props;
  return (
    <DatePicker
      preventOverflow
      className='date-picker'
      value={value}
      onChange={onChange}
      format='yyyy-MM-dd HH:mm:ss'
      defaultCalendarValue={[
        new Date("2025-02-01 00:00:00"),
        new Date("2025-03-01 23:59:59"),
      ]}
    />
  );
};

export default DateRangePicker;
