import React from 'react'
import Btn1 from '../Btn1/Btn1'
import H1 from '../H1/H1'
import H2 from '../H2/H2'
import H3 from '../H3/H3'
import S from './HeaderBg.module.css'

const HeaderBg = () => {
  return (
    <div className={S.headerBg}>
      <H2 text='uma seleção de produtos'/>
      <H1 text='especial para você'/>
      <H3 text='Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!'/>

      <div className={S.w769}>
        <Btn1 text='Conheça a Linx'/>
        <Btn1 text='Ajude o algorítimo'/>
        <Btn1 text='Seus produtos'/>
        <Btn1 text='Compartilhe'/>
      </div>
    </div>
  )
}

export default HeaderBg