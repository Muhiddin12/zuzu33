import style from "./BranchCard.module.scss";
import * as React from "react";

function BranchCard({ key, name, address, fromTime, toTime }) {
  return (
    <div className={style.branchCardWrap}>
      <div className={style.branch}>
        <div className={style.branchName}>{name}</div>
        <div className={style.branchTimeJob}>
          Magic City,ул. Бабура, 174, Ташкент, Узбекистан
        </div>
        <div className={style.branchTime}>Часы работы</div>
        {/* <div className={style.branchTime}>{address}</div> */}
        <div className={style.branchForDay}>Ежедневно: 10:00-03:00</div>
      </div>
    </div>
  );
}

export default BranchCard;
