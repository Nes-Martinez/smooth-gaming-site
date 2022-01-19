import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import SingleProduct from "./components/singleProduct";

function App() {
  return (
    <Router>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
