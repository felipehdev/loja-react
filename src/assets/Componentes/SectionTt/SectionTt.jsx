import React from 'react'
import S from './SectionTt.module.css'

const SectionTt = (props) => {
  return (
    <h5 className={S.sectionTt}>{props.text}</h5>
  )
}

export default SectionTt