import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {

  return (
    <div className='Nav'>
       <Link to= {"/"}  className='botonNav'> Home </Link>
       <Link to= {"/Carrousel"}  className='botonNav'> Carrousel </Link>
       <Link to= {"/Mapa"}  className='botonNav'> Mapa </Link>
       <Link to= {"/Adopcion"}  className='botonNav'> Adopcion </Link>
       <Link to={"/Perfil"} className='botonNav'> Perfil </Link>
       <Link to= {"/OtrosServicios"}  className='botonNav'> Otros Servicios</Link>
    </div>
  )
}

export default Nav;