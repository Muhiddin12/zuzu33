import * as React from "react";
import style from "./Branch.module.scss";
import data from "./bran";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import image from "./image180.png";

const baseURL =
  "https://64787eea362560649a2de56b.mockapi.io/zuzuAdmin/branches";

function Branch() {
  const [dataBranch, setDataBranch] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => setDataBranch(res.data))
      .catch((err) => console.log("err", err));
  }, []);

  const { id } = useParams();

  const dataBranchTest = dataBranch.find((v) => v.id == id);

  console.log("id====>", dataBranch);

  return (
    <div className={style.branchWrap}>
      {/* <div className={style.branchTitle}>{dataBranchTest.name}</div> */}
      <div className={style.branchDescription}>
        Название кафе «Zuzu» переводится с грузинского как «комната для
        приёмов». В интерьере заведения королевская пышность сочетается с уютом
        гостиной: на полу лежат домотканые орнаментальные ковры, зал украшает
        мебель из антикварного магазина, а серванты заполнены милыми
        безделушками. Еду здесь готовят по-домашнему, точно в тбилисском сахли.
        Посетители рекомендуют брать «бадриджаны бебия», то есть «баклажаны по
        бабушкиному рецепту» и мацони. Говорят, этот кисломолочный продукт здесь
        — один из лучших в городе.
      </div>
      <div className={style.branchImage}>
        <img src={image} alt="branchImage" />
      </div>
      {/* <div className={style.address}>{dataBranchTest.address}</div> */}
      <div className={style.time}>
        {/* {dataBranchTest.from}-{dataBranchTest.to} */}
      </div>
      <div className={style.number}>+998 71 200 77 77</div>
    </div>
  );
}

export default Branch;
