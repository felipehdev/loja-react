import React from 'react'
import S from './ProductTt.module.css'

const ProductTt = (props) => {
  return (
    <p className={S.productTt}>{props.text}</p>
  )
}

export default ProductTt