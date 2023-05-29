import style from "./Cart.module.scss";
import orderImage from "./Logo.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addActionCreator,
  addDecrement,
  addDeleteBasket,
  addIncrement,
  addRemoveList,
} from "../../redux/zuzuReduser";

function Cart() {
  const zuzuDataRedux = useSelector((state) => state.zuzuData);
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch(addIncrement(id));
  };

  const decrement = (id) => {
    dispatch(addDecrement(id));
  };

  const removeList = (id) => {
    dispatch(addRemoveList(id));
  };

  const deleteBasket = () => {
    dispatch(addDeleteBasket());
  };

  return (
    <div className={style.cart}>
      <div className={style.cartMenu}>
        <div className={style.header}>
          <div className={style.title}>Корзина</div>
          <div className={style.delete}>
            <DeleteForeverIcon onClick={deleteBasket}></DeleteForeverIcon>
            <div className={style.text}>Очистить корзину</div>
          </div>
        </div>
        {zuzuDataRedux.map((product) => (
          <div className={style.order}>
            <div className={style.orderMenu}>
              <div className={style.orderImg}>
                <img src={product.imgPizza} alt="orderImage" />
              </div>
              <div className={style.orderName}>
                <div className={style.orderTitle}>{product.name}</div>
                <div className={style.orderSubTitle}>Средняя, Воздушное</div>
              </div>
            </div>
            <div className={style.orderCunt}>
              <div className={style.count}>{product.price} сум</div>
              <Fab
                color="#F2F2F2"
                onClick={() => decrement(product.id)}
                disabled={product.number === 1}
              >
                <RemoveIcon />
              </Fab>
              <div className={style.number}>{product.number}</div>
              <Fab color="#F2F2F2" onClick={() => increment(product.id)}>
                <AddIcon />
              </Fab>
              <ClearIcon onClick={() => removeList(product.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className={style.cartPrice}>
        <div className={style.priceHeader}>Ваш заказ</div>
        {zuzuDataRedux.map((product) => (
          <div className={style.priceCount}>
            <p className={style.priceNumber}>{product.number} x Пицца кебаб</p>
            <p className={style.priceNumberCount}>
              {product.number * product.price} сум
            </p>
          </div>
        ))}
        <div className={style.priceDelivery}>
          <p className={style.delivery}>Доставка</p>
          <p className={style.deliveryCount}>0 сум</p>
        </div>
        <div className={style.priceSumma}>
          <div className={style.summa}>Итого</div>
          <div className={style.priceMoney}>
            {zuzuDataRedux.reduce((total, el) => {
              return total + el.number * el.price;
            }, 0)}
            сум
          </div>
        </div>
        <Button
          variant="contained"
          style={{
            borderRadius: "20px",
            backgroundColor: "#EC8D1E",
            margin: "8px 80px",
          }}
        >
          К оформление заказа
        </Button>
      </div>
    </div>
  );
}

export default Cart;
