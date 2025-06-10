import React from "react";

import Nav from "./Navigation/Nav.jsx";
import Main from "./components/main/Main.jsx";
import { UIProvider } from "./components/UserContext.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Modal from "./components/Modal.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/ProductItems/Products.jsx";
import Card from "./components/Card.jsx";
import Filtermenu from "./components/ProductItems/Filtermenu.jsx";
import Category from "./components/ProductItems/Category.jsx";
import Colors from "./components/ProductItems/Colors.jsx";
import Price from "./components/ProductItems/Price.jsx";
import Cartpage from "./components/Cartpage.jsx";
import CartPage from "./components/Cartpage.jsx";
import Suggested from "./components/Suggested/Suggested.jsx";
import Review from "./components/Review/Review.jsx";
import Recommended from "./components/ProductItems/Categories.jsx";
import ProductsItems from "./components/ProductItems/ProductsItems.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <UIProvider>
        <Router>
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
            <Route path="/ProductsItems" element={<ProductsItems />} />
            <Route path="/Cartpage" element={<Cartpage />} />
          </Routes>
        </Router>
      </UIProvider>
    </div>
  );
}

export default App;
