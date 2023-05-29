import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import logo from "./Logo.png";

function Footer() {
  const links = [
    {
      htext: "Филиалы",
      href: "/branches",
    },
    {
      htext: "О нас",
      href: "/about",
    },
    {
      htext: "Контакты",
      href: "/contacts",
    },
  ];

  return (
    <div className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.footerLogo}>
          <img src={logo} alt="Footer-Logo" />
        </div>
        <nav>
          <ul className={style.info}>
            {links.map((v) => (
              <li className={style.text}>
                <Link to={v.href}>{v.htext}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={style.footerBottom}>
        <div className={style.rights}>
          ©Zuzu 2005 - 2021 All rights reserved
        </div>
        <div className={style.icons}>
          <span className={style.instagram}>
            <box-icon color="white" type="logo" name="instagram"></box-icon>
          </span>
          <span className={style.instagram}>
            <box-icon color="white" type="logo" name="facebook"></box-icon>
          </span>
          <span className={style.instagram}>
            <box-icon color="white" name="telegram" type="logo"></box-icon>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
