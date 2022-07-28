import React from 'react'
import S from './ProductFullPrice.module.css'

const ProductFullPrice = (props) => {
  return (
    <p className={S.productFullPrice}>De: R${props.price}</p>
  )
}

export default ProductFullPrice