import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/Home";
import Create from "./assets/Create";
import View from "./assets/View";
import Update from "./assets/Update";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
       
        <Route path="/registration" element={<Create />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
