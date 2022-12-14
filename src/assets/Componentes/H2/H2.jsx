import S from './H2.module.css'
import React from 'react'

const H2 = (props) => {
  return (    
    <h2 className={S.h2}>{props.text}</h2>
  )
}

export default H2