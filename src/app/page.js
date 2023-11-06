import Image from "next/image";
import styles from "./page.css";
import Calendar from "../components/Calendar";
import ToolBar from "../components/ToolBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <div className="DashBoard">
        <ToolBar />
        <Calendar />
      </div>
      <Footer />
    </main>
  );
}
