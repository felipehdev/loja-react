import React from 'react'
import S from './P.module.css'
const P = (props) => {
  return (
    <p className={S.p}>{props.text}</p>
  )
}

export default P