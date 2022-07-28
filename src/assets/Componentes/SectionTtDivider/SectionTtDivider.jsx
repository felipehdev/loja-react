import React from 'react'
import S from '.SectionTtDivider.module.css'

const SectionTtDivider = () => {
  return (
    <div className={S.sectionTtDivider}>
      <br className={S.w98} />
      <SectionTt/>
      <br className={S.w98}/>
    </div>
  )
}

export default SectionTtDivider