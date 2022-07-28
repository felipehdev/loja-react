import React from 'react'
import S from './Btn2.module.css'

const Btn2 = (props) => {
  ;
  return (
    <button className={S.btn2} >
      <p className={S.btnP}>{props.text}</p>
    </button >
  )
}

export default Btn2