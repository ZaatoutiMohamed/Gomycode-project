import "./App.css";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import PrivateRoute from "./Components/PrivateRoute";
// import ProductL from "./Components/ProductL";
import ProductDetails from "./Components/ProductDetails";
// import AddProduct from "./Components/AddProduct";

// import ProductDetails from "./Components/ProductDetails";

import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="d-flex flex-column site-container">
      <header>
        <NavBar />
      </header>
      <main>
        <Container>
          <Routes>
            {/* <Route path="/AddProduct" element={<AddProduct />}></Route> */}
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />

            <Route
              path="/Profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
