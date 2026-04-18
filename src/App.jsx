import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import Checkout from "./pages/Checkout";
import SearchResults from "./pages/SearchResults";
import Orders from "./pages/Orders"; // admin view


export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(180deg, #1a1a1a 0%, #1f1a14 50%, #1a1a1a 100%)",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/admin/orders" element={<Orders />} />
          </Routes>

          {/* ✅ Cart sidebar + Toast still global */}
          <CartSidebar />
          <Toast />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
