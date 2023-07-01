import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Category from "./category";
import Dashboard from "./dashboard";
import Entertainment from './browseent'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/browse" element={<Dashboard />} />
          <Route path="/enter" element={<Entertainment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
