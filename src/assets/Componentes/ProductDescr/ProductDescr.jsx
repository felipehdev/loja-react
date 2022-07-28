import React from 'react'
import S from './ProductDescr.module.css'

const ProductDescr = (props) => {
  return (
    <p className={S.ProductDescr}> {props.text}</p>
  )
}

export default ProductDescr