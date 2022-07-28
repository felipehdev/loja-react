import React from 'react'
import S from './H4.module.css'

const H4 = (props) => {
  return (
    <h4 className={S.h4}>{props.text}</h4>
  )
}

export default H4