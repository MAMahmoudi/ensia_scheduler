import "./Calendar.css";
import Year from "./Year";
import Month from "./Month";
import Week from "./Week";
import Day from "./Day";

export default function Calendar() {
  const key = "Year";
  let Calendar_Mode;

  {
    switch (key) {
      case "Year":
        Calendar_Mode = <Year />;
      case "Month":
        Calendar_Mode = <Month />;
      case "Week":
        Calendar_Mode = <Week />;
      case "Day":
        Calendar_Mode = <Day />;
      default:
        Calendar_Mode = <Year />;
    }
  }

  return <div className="Calendar">{Calendar_Mode}</div>;
}
