import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
//React Router dom helps to connect the client side with api
import {
  BrowserRouter as Router,
  Route,
  Routes,Navigate
} from "react-router-dom";


const App = () => {
  const user = true;
  return (
    
    <Router>
    <Routes>

    <Route index path="/" element={<Home/>}></Route>
    <Route path="/products/:category" element={<ProductList/>}></Route>
    <Route path="/product/:id" element={<Product/>}></Route>
    <Route path="cart" element={<Cart/>}></Route>
    <Route path="success" element={<Success />}></Route>
    <Route path="login" element= {user ? <Navigate to= "/" /> : <Login/>}> </Route>
    <Route path="register" element={user ? <Navigate to= "/" /> : <Register/>}></Route>
    
    
    </Routes>
    </Router>
  );
};  

export default App;