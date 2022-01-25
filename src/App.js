import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

import Home from "./components/home";
import Navbar from "./components/navbar";
import SingleProduct from "./components/singleProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
