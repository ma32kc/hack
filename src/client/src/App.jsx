import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth/Auth";
import RegisterPage from "./Pages/RegisterPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth></Auth>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
