import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <select>
        <option selected>Year</option>
        <option>Month</option>
        <option>Week</option>
        <option>Day</option>
      </select>
    </header>
  );
}
