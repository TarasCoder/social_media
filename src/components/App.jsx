import React from "react";
import "../styles.css";
import Dialogs from "./Dialogs/Dialogs";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" component={Dialogs}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
