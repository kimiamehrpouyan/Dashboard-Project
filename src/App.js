import React from "react";
import "./index.css";
import Dashboard from "./Pages/Dashboard";
import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";
import Analytics from "./Pages/Analytics";

export default function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
        {/* <Dashboard /> */}
      </div>
    </>
  );
}
