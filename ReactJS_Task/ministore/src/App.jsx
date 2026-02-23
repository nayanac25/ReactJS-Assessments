import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import "./App.css";

function RefreshRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  if (window.performance.getEntriesByType("navigation")[0].type === "reload") {
    navigate("/");
  }
}, []);

  return null;
};

function App() {
  return (
    <BrowserRouter>

    <RefreshRedirect />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;