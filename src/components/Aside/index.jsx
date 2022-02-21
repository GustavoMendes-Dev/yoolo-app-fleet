import React from 'react'
import { Link } from 'react-router-dom'

import Brand from '../Brand'
import { Dashboard, Motocycle } from '../Icons'

import './style.css'

export default function Aside() {

  return (
    <div className='aside__bar'>
      <div className='aside__brand'>
        <Brand
          width={70}
        />
      </div>
      <Link className='menu__item active' to='/'>
        <Dashboard/>
        <p>Painel</p>
      </Link>
      <Link className='menu__item' to='/'>
        <Motocycle/>
        <p>Entregadores</p>
      </Link>
      
    </div>
  )
}