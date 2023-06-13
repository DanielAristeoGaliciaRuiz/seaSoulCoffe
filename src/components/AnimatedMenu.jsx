import React, { useState } from 'react'
import './styles/AnimatedMenu.css'
import { NavLink } from 'react-router-dom'

const AnimatedMenu = () => {
  const [animatedMenuState, setAnimatedMenuState] = useState(false)

  const handlerMenuAnimated=()=>{
    setAnimatedMenuState(!animatedMenuState)
  }

  return (
    <section className={animatedMenuState? 'sectionContainerAnimatedMenu activeZIndex': 'sectionContainerAnimatedMenu' }>

    <div className={animatedMenuState? 'animatedMenuContainer active': 'animatedMenuContainer noActive' }>
      <div className="closeButton" onClick={handlerMenuAnimated}>
      <i className='bx bx-x-circle'></i>
      </div>
      
      <ul className='listContainer'>
      <NavLink className='navLink' to='/'>
      <li className='animatedMenuItem'>Inicio</li>
        </NavLink>

        <NavLink className='navLink' to='/nosotros'>
      <li className='animatedMenuItem'>Nosotros</li>
        </NavLink>

        <NavLink className='navLink'  to='/variedades'>
      <li className='animatedMenuItem'>Variedades</li>
        </NavLink>

        <NavLink className='navLink'  to='/locaciones'>
      <li className='animatedMenuItem'>Locaciones</li>
        </NavLink>

        
      <li className='animatedMenuItem'>Tienda en Línea</li>
       

        <NavLink className='navLink'  to='/contacto'>
      <li className='animatedMenuItem'>Contacto</li>
        </NavLink>

      </ul>
      <div className="socialMedia">
      <i className='bx bxl-instagram'></i>
      </div>
    </div>
      <i className={animatedMenuState?'bx bxs-coffee-bean activeAnimation':'bx bxs-coffee-bean noActiveAnimation'} onClick={handlerMenuAnimated}></i>
    </section>
  )
}

export default AnimatedMenu