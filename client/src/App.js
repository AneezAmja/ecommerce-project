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
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <>
      <div className="app">
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
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
        </SkeletonTheme>
      </div>
        <ToastContainer limit={1}/>
    </>
  );
}

export default App;
