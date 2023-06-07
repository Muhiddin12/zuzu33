import style from "./Empty.module.scss";
import Button from "@mui/material/Button";
import imgBasket from "./cart1.png";

function Empty() {
  return (
    <div className={style.empty}>
      <div className={style.image}>
        <img src={imgBasket} alt="" />
      </div>
      <div className={style.title}>В вашей корзине пока пусто</div>
      <div className={style.subTitle}>
        Тут появятся товары, которые вы закажете
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#EC8D1E", borderRadius: "15px" }}
      >
        Вернуться в меню
      </Button>
    </div>
  );
}

export default Empty;
