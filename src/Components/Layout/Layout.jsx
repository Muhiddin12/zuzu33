import style from "./Layout.module.scss";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <main className={style.main}>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
