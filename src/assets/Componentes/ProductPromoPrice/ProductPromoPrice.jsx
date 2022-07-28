import React from 'react'
import S from './ProductPromoPrice.module.css'

const ProductPromoPrice = (props) => {
  return (
    <p className={S.productPromoPrice}> Por: R${props.price} </p>
  )
}

export default ProductPromoPrice