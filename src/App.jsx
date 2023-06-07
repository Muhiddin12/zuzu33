import "./App.scss";
import "boxicons";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart.jsx";
import Layout from "./Components/Layout/Layout";
import Contacts from "./Components/Contacts/Contacts";
import Branches from "./Components/Branches/Branches";
import About from "./Components/About/About";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Branch from "./Components/Branch/Branch";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="branches" element={<Branches />} />
          <Route path="branches/:id" element={<Branch />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
          <Route path="about-us" element={<Navigate to="/about" />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
