import React from 'react'
import S from './Btn1.module.css'

const Btn1 = (props) => {
  return (
    <button className={S.btn1}> <p className={S.buttonText}> {props.text}</p></button>
  )
}

export default Btn1