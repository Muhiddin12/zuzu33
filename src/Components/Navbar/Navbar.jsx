import style from "./Navbar.module.scss";
import logo from "./Logo.png";
import rus from "./rus.png";
import "boxicons";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Menu", "Filiallar", "Biz haqimizda", "Aloqa"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <MenuBookIcon /> : <HolidayVillageIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className={style.navbar}>
      <div className={style.left}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}

        <a href="http://localhost:3000/">
          <img src={logo} alt="logo" />
        </a>
        <div className={style.map}>
          <box-icon name="map"></box-icon>
          <div></div>
          Toshkent
        </div>
      </div>

      <div className={style.right}>
        <Link to="/cart">
          <div className={style.cart}>
            <box-icon name="cart-alt"></box-icon>
            <span>Корзина</span>
          </div>
        </Link>

        <div className={style.flag}>
          <img src={rus} alt="rus-img" />
          <box-icon name="chevron-down"></box-icon>
        </div>

        <div className={style.user}>
          <box-icon name="user"></box-icon>
          Войти
        </div>
      </div>
    </div>
  );
}

export default Navbar;
