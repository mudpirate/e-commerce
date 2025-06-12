import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Navigation/Nav";
import Main from "./components/main/Main";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import ProductItems from "./components/ProductItems";
import Items from "./components/ProductItems/Items.jsx";
import { AppProvider } from "./context/AppContext";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <Hero />
                  <Footer />
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<ProductItems />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
