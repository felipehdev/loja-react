import React from "react";
import S from "./ProductImg.module.css";

const ProductImg = (props) => {
  return (
    <div className={S.productImg}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default ProductImg;
