import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import style from "./App.module.css"

import Navbar from "./components/Navbar/Navbar";
import Layout from "./pages/Layout";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <Layout />
      </div>
    </>
  );
}

export default App;
