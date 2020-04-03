import React from "react";
import styles from "./App.module.scss";
import CardList from "../../component/CardList/CardList";
import Navbar from "../../component/Navbar";
import Routes from "../../routes/Routes";

function App() {
  return (
    <main className={styles.App}>
      <header>
        <h1> Top Countries to Travel in 2020 </h1>
        <h2> Search the Globe for your next destination</h2>
      </header>
      <Navbar />
      <Routes />
      {/* <CardList /> */}
    </main>
  )
}

export default App;