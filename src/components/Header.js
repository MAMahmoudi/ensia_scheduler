import "./Header.css";

export default function Header({ setMode }) {
  function handleChange(event) {
    setMode(event.target.value);
  }

  return (
    <header className="Header">
      <select onChange={handleChange}>
        <option selected>Year</option>
        <option>Month</option>
        <option>Week</option>
        <option>Day</option>
      </select>
    </header>
  );
}
