import Image from "next/image";
import styles from "./page.css";
import Calendar from "../components/Calendar";
import ToolBar from "../components/ToolBar";

export default function Home() {
  return (
    <main className="main">
      <ToolBar />
      <Calendar />
    </main>
  );
}
