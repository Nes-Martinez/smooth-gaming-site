import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/aboutpage";
import Footer from "./components/footer";

import Home from "./components/home";
import MainNavbar from "./components/mainNavBar";
import Products from "./components/products";
import SingleProduct from "./components/singleProduct";

function App() {
  return (
    <Router>
      <MainNavbar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/about" element={<AboutPage />} />v
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
