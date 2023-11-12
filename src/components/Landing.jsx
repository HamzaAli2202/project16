import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import { Greet } from "./Greet";
import { Fruits } from "./Fruits";
import { Foods } from "./Foods";
import { Color } from "./Color";

const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greet" element={<Greet />} />
        <Route path="/fruit" element={<Fruits />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/colors" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
