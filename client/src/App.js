import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/products/Products";
import Header from "./components/header/Header";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Cart from "./pages/cart/Cart";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/products" element={<><Header /> <Home /> </>} />
            <Route path="/products/:id" element={<> <Header /><ProductDetail /> </>} />
            <Route path="/register" element={<><Header /><Register /> </>} />
            <Route path="/login" element={<><Header /><Login /> </>} />
            <Route path="/profile" element={<> <Header /><Profile /> </>} />    {/* TODO: Need to make protected */}
            <Route path="/cart" element={<> <Header /><Cart /> </>} />    
            <Route path="*" element={<Navigate replace to={"/products"} />} />
          </Routes>
        </Router>
      </div>
        {/* <ToastContainer /> */}
    </>
  );
}

export default App;
