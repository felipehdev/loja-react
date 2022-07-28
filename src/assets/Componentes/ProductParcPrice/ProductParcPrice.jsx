import React from "react";
import S from "./productParcPrice.module.css";

const ProductParcPrice = (props) => {
  return (
    <p className={S.productParcPrice}>
      'ou ' {props.parcel}'x' 'de R$' {props.price}
    </p>
  );
};

export default ProductParcPrice;
