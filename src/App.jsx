import "./App.scss";
import "boxicons";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart.jsx";
import Layout from "./Components/Layout/Layout";
import Contacts from "./Components/Contacts/Contacts";
import Branches from "./Components/Branches/Branches";
import About from "./Components/About/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="branches" element={<Branches />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
