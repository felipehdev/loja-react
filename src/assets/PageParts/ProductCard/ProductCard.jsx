import { React, useState , useEffect } from "react";
import API from "../../API/API";
import Btn2 from "../../Componentes/Btn2/Btn2";
import ProductDescr from "../../Componentes/ProductDescr/ProductDescr";
import ProductFullPrice from "../../Componentes/ProductFullPrice/ProductFullPrice";
import ProductImg from "../../Componentes/ProductImg/ProductImg";
import ProductParcPrice from "../../Componentes/ProductParcPrice/ProductParcPrice";
import ProductPromoPrice from "../../Componentes/ProductPromoPrice/ProductPromoPrice";
import ProductTt from "../../Componentes/ProductTt/ProductTt";
import S from "./ProductCard.module.css";



const ProductCard = () => {
  return (  

    <div className={S.productCard}>
      
      <ProductImg />
      <ProductTt />
      <ProductDescr />
      <ProductFullPrice />
      <ProductPromoPrice />
      <ProductParcPrice />
      <Btn2 text="Comprar" />
    </div>
  );
};

export default ProductCard;
