import style from "./Categories.module.scss";

function Header() {
  return (
    <div className={style.category}>
      <button>Пицца</button>
      <button>Паста</button>
      <button>Салаты</button>
      <button>Напитки</button>
      <button>Синнамон роллы</button>
      <button>Гарниры</button>
      <button>Соусы</button>
    </div>
  );
}

export default Header;
