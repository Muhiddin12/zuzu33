import style from "./Branches.module.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import bran from "./bran";

function Branches() {
  return (
    <div className={style.branchWrap}>
      <div className={style.branchHeader}>
        <div className={style.headerText}>Филиалы</div>
        <div className={style.headerButtons}>
          <Button variant="contained" style={{ backgroundColor: "#EC8D1E" }}>
            Список
          </Button>
          <Button variant="contained" style={{ backgroundColor: "#EC8D1E" }}>
            Карта
          </Button>
        </div>
      </div>
      <div className={style.allBranches}>
        {bran.map((branch) => (
          <div className={style.branch}>
            <div className={style.branchName}>{branch.name}</div>
            <div className={style.branchTimeJob}>
              Magic City,ул. Бабура, 174, Ташкент, Узбекистан
            </div>
            <div className={style.branchTime}>Часы работы</div>
            <div className={style.branchForDay}>Ежедневно: 10:00-03:00</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branches;
