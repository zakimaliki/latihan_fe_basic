import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Products from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import Page404 from "./pages/Page404";


import { BrowserRouter, Routes, Link, Route,Navigate } from "react-router-dom";
import Latihan from "./pages/Latihan";
import Table from "./pages/Table";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product-list">Product List</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/product/1">Product Detail</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true"/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product" element={<Products />} />
          <Route path="/latihan" element={<Latihan/>} />
          <Route path="/table" element={<Table/>} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
