import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/home/Home'
import Nosotros from '../pages/sobreNosotros/Nosotros'
import Locaciones from '../pages/locaciones/Locaciones'
import Variedades from '../pages/variedades/Variedades'
import Contacto from '../pages/contacto/Contacto'
import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
  const location=useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/locaciones' element={<Locaciones/>}/>
        <Route path='/variedades' element={<Variedades/>}/>
        <Route path='/contacto' element={<Contacto/>}/>   
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes