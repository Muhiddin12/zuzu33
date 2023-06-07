import style from "./Branches.module.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import bran from "./bran";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import BranchCard from "../BranchCard/BranchCard";
import { Link } from "react-router-dom";

const baseURL =
  "https://64787eea362560649a2de56b.mockapi.io/zuzuAdmin/branches";

function Branches() {
  const [dataBranch, setDataBranch] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => setDataBranch(res.data))
      .catch((err) => console.log("err", err));
  }, []);

  console.log("dataBranch1111111111111111", dataBranch);

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
        {dataBranch.map((bran) => (
          <Link to={bran.id}>
            <BranchCard
              key={bran.id}
              name={bran.name}
              address={bran.address}
              fromTime={bran.fromTime}
              toTime={bran.toTime}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Branches;
