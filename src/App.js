import React from "react";
import "./App.css";
import Login from "./components/Login";
import Lista from "./Lista";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </Router>
  );
}

export default App;
