import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StoreView, SendData } from "../views";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreView />} exact />
        <Route path="/send-data" element={<SendData />} exact />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
