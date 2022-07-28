import React from 'react'
import S from './H3.module.css'

const H3 = (props) => {
  return (
    <h3 className={S.h3}>{props.text}</h3>
  )
}

export default H3