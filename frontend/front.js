import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Products from "./products";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
export default App;