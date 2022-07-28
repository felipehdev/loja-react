import React from 'react'
import S from './H1.module.css'

const H1 = (props) => {
  
  return (
    
    <h1 className={S.h1}> {props.text} </h1>
  )
}

export default H1