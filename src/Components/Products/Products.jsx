import style from "./Products.module.scss";
// import imgPizza from "./Rectangle 5.png";
import data from "./data";

function Products({ handleOnClickId }) {
  return (
    <div className="pro">
      {data.map((item) => (
        <div className={style.allProducts}>
          <div className={style.menuName}>{item.category}</div>
          <div className={style.products}>
            {item.products.map((product) => (
              <div className={style.product}>
                <div className={style.productImage}>
                  <img src={product.imgPizza} alt="pImage" />
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

// function Products({ handleOnClickId }) {
//   return (
//     <div className={style.allProducts}>
//       <div className={style.menuName}>Пицца</div>
//       <div className={style.products}>
//         {pizzaData.map((product) => (
//           <div className={style.product}>
//             <div className={style.productImage}>
//               <img src={product.imgPizza} alt="pImage" />
//             </div>
//             <div className={style.title}>{product.name}</div>
//             <div className={style.subtitle}>{product.comment}</div>
//             <div className={style.productInfo}>
//               <div className={style.price}>От {product.price} сумов</div>
//               <button onClick={() => handleOnClickId(product.id)}>
//                 Выбрать
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
