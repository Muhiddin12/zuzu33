import { useEffect, useState } from "react";
import style from "./Products.module.scss";
// import imgPizza from "./Rectangle 5.png"
import axios from "axios";

// import data from "./data";
const data = "https://fakestoreapi.com/products";

function Products({ handleOnClickId }) {
  const [product, setProduct] = useState([]);

  // console.log("mydata", product);

  const formatCategories = (arr) => {
    const categories = arr.reduce(
      (total, v) =>
        total.includes(v.category) ? total : [...total, v.category],
      []
    );
    return categories.reduce((total, category) => {
      return [
        ...total,
        { category, productss: arr.filter((e) => e.category === category) },
      ];
    }, []);
  };

  const filterProduct = formatCategories(product);

  // console.log("filterProduct => ", filterProduct);

  useEffect(() => {
    axios
      .get(data)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className="pro">
      {filterProduct.map((item) => (
        <div className={style.allProducts}>
          <div className={style.menuName}>{item.category}</div>
          <div className={style.products}>
            {item.productss.map((product) => (
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={product.image} alt="pImage" />
                </div>
                <div className={style.title}>{product.name}</div>
                <div className={style.subtitle}>{product.comment}</div>
                <div className={style.productInfo}>
                  <div className={style.price}>От {product.price} сумов</div>
                  <button onClick={() => handleOnClickId(product.id)}>
                    Выбрать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;

// {item.products.map((product) => (
//   <div className={style.product}>
//     <div className={style.productImage}>
//       <img src={product.imgPizza} alt="pImage" />
//     </div>
//     <div className={style.title}>{product.name}</div>
//     <div className={style.subtitle}>{product.comment}</div>
//     <div className={style.productInfo}>
//       <div className={style.price}>От {product.price} сумов</div>
//       <button onClick={() => handleOnClickId(product.id)}>
//         Выбрать
//       </button>
//     </div>
//   </div>
// ))}
