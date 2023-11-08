import "./Calendar.css";
import Year from "./Year";
import Month from "./Month";
import Week from "./Week";
import Day from "./Day";

export default function Calendar({ Mode }) {
  //const Mode = "Day";
  let Calendar_Mode;

  {
    switch (Mode) {
      case "Year":
        Calendar_Mode = <Year />;
        break;
      case "Month":
        Calendar_Mode = <Month />;
        break;
      case "Week":
        Calendar_Mode = <Week />;
        break;
      case "Day":
        Calendar_Mode = <Day />;
        break;
      default:
        Calendar_Mode = <Year />;
        break;
    }
  }

  return <div className="Calendar">{Calendar_Mode}</div>;
}
