import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PostProduct from "./components/PostProduct/PostProduct";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import Review from "./components/Review/Review";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="postproduct" element={<PostProduct />} />
        <Route path="watches" element={<Products />} />
        <Route path="review" element={<Review />} />
        <Route path="products/:_id" element={<ProductDetails/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
