import React from "react";
import "../styles.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Profile from "./Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
