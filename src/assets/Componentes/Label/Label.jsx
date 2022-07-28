import React from 'react'
import S from './Label.module.css'

const Label = (props) => {
  return (
    <label className={S.label}>{props.text}</label>
  )
}

export default Label