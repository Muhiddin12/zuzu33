import style from "./Contacts.module.scss";

function Contacts() {
  return (
    <div className={style.contact}>
      <div className={style.title}>Контакты</div>
      <div className={style.tel}>
        Единный call-центр:
        <span className={style.contactTel}>+998 71 200 77 77</span>
      </div>
      <div className={style.contactInfo}>
        Вы можете написать нам
        <span className={style.contactBot}>
          <a href="#">@ZuzuPizzaSupport_bot</a>
        </span>
        также вы можете звонить по номеру +998712005400.
      </div>
    </div>
  );
}

export default Contacts;
