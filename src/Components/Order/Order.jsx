import style from "./Order.module.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addActionCreator,
  addDecrement,
  addIncrement,
} from "../../redux/zuzuReduser";

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

function Order({ currentProduct }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((old) => old + 1);
    // dispatch(addIncrement(zuzuCounting[0] + 1));
  };

  const decrement = () => {
    setCount((old) => old - 1);
    // dispatch(addDecrement(zuzuCounting[0] - 1));
  };

  const addOrder = () => {
    currentProduct.number = count;
    dispatch(
      addActionCreator(currentProduct, currentProduct.id, currentProduct.number)
    );
    // console.log("currentProduct", currentProduct, currentProduct.id);
  };

  return (
    <div className={style.home}>
      <Box sx={styleNew}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className={style.modal}>
            <div className={style.productImage}>
              <img src={currentProduct.imgPizza} alt="pImage" />
            </div>
            <div className={style.productInfoModal}>
              <div className={style.productTitle}>{currentProduct.name}</div>
              <div className={style.productSubTitle}>
                {currentProduct.comment}
              </div>
              <div className={style.buttons}>
                <div className={style.buttonCount}>
                  <Button
                    onClick={decrement}
                    variant="contained"
                    color="grey"
                    disabled={count == 1}
                  >
                    <RemoveIcon color="red" />
                  </Button>
                  <p>{count}</p>
                  <Button onClick={increment} variant="contained" color="grey">
                    <AddIcon color="red" />
                  </Button>
                </div>
                <Button onClick={addOrder} variant="contained" color="grey">
                  <div className={style.add}>Добавить</div>
                  <div className={style.money}>
                    От {currentProduct.price * count} сумов
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </Typography>
      </Box>
    </div>
  );
}

export default Order;
