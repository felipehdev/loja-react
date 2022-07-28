import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import S from './SectionTwo.module.css'
import Btn2 from '../../Componentes/Btn2/Btn2'

const SectionTwo = () => {
  return (
    <div className={S.sectionTwo}>        
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>                  
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <Btn2 text="Ainda mais produtos aqui!" />
        

    </div>
  )
}

export default SectionTwo