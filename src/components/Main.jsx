import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import App from "../App"; 
import Path from "./Path";
import Header from "./Header";

const Main = () => {
  return (
<div>     <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Path />} />
        <Route path="/works" element={<Path />} />
        <Route path="/team" element={<Path />} />
        <Route path="/contact" element={<Path />} />
      </Routes>
      </div> 
  );
};

export default Main;
