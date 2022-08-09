import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";
import Discounts from "./Discounts";
import LeadCapture from "./LeadCapture";
import Poststay from "./Poststay";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/room" element={<Discounts />} />
        <Route path="/modal" element={<LeadCapture />} />
        <Route path="/poststay" element={<Poststay />} />
      </Routes>
    </BrowserRouter>
  );
}
