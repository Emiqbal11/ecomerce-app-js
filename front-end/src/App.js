import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import MainProduct from "./pages/MainProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user =useSelector(state=>state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:Id" element={<MainProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success/>}/>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
          <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>

    // <ProductList/>
    // <MainProduct/>
    // <Register/>
    // <Login/>
    // <Cart/>
  );
}

export default App;
