import "./App.css";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import AllProductsPage from "./pages/AllProductsPage";
import AllSalesPage from "./pages/AllSalesPage";
import CartPage from "./pages/CartPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allCategories" element={<CategoriesPage />} />
        <Route path="/allProducts" element={<AllProductsPage />} />
        <Route path="/allSales" element={<AllSalesPage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
