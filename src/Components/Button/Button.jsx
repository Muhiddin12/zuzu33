import style from "./Header.module.scss";
import header from "./image 7.png";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.chevronL}>
        <box-icon name="chevron-left"></box-icon>
      </div>
      <div className={style.box}>
        <img src={header} alt="header" className={style.head} />
      </div>
      <div className={style.chevronR}>
        <box-icon name="chevron-right"></box-icon>
      </div>
    </div>
  );
}

export default Header;
