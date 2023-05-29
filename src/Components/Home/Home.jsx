import style from "./Home.module.scss";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import pImage from "./Rectangle 5.png";
import Order from "../Order/Order";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import data from "../Products/data";

const styleNew = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 802,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleOnClickId = (id) => {
    handleOpen();
    const current = data.find((product) =>
      product.products.find((i) => i.id === id)
    );
    setCurrentProduct(current.products.find((el) => el.id == id));
    // console.log("currentProduct", currentProduct);
  };

  return (
    <div className={style.home}>
      <Header />
      <Categories />
      <Products handleOnClickId={handleOnClickId} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Order currentProduct={currentProduct} />
      </Modal>
    </div>
  );
}

export default Home;
