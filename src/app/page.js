"use client";
import Image from "next/image";
import styles from "./page.css";
import Calendar from "../components/Calendar";
import ToolBar from "../components/ToolBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [Mode, setMode] = useState("Year");

  return (
    <main className="main">
      <Header  setMode={setMode}  />
      <div className="DashBoard">
        <ToolBar/>
        <Calendar Mode={Mode} />
      </div>
      <Footer />
    </main>
  );
}
