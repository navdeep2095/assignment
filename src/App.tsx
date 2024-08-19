import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import Body from "./Body";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
