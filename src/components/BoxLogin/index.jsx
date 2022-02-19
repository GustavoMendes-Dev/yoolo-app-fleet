import React from 'react'
import Brand from '../Brand'

import './style.css'

export default function BoxLogin({children, title, subtitle}) {

  return (
    <div className='box__login'> 
      <Brand/>
      <h1 className='title__login'>{title}</h1>
      <h4 className='subtitle__login'>{subtitle}</h4>
      {children}
    </div>
  )
}