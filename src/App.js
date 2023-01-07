import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Cart from "./Components/Cart";
function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Products title="Supermart-Home" category="" />} />
          <Route
            path="/clothes"
            element={<Products title="Supermart-Clothes" category="/categories/1" />}
          />
          <Route
            path="/electronics"
            element={<Products title="Supermart-Electronics" category="/categories/2" />}
          />
          <Route
            path="/furniture"
            element={<Products title="Supermart-Furniture" category="/categories/3" />}
          />
          <Route
            path="/shoes"
            element={<Products title="Supermart-Shoes" category="/categories/4" />}
          />
           <Route
            path="/cart"
            element={<Cart title="Supermart-Cart"/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
