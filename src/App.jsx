
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contacto from './pages/contacto/Contacto'
import Home from './pages/home/Home'
import Locaciones from './pages/locaciones/Locaciones'
import Nosotros from './pages/sobreNosotros/Nosotros'
import Variedades from './pages/variedades/Variedades'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {

  return (
    <div className='App'>
      {/* <Routes> */}
        <AnimatedRoutes/>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/locaciones' element={<Locaciones/>}/>
        <Route path='/variedades' element={<Variedades/>}/>
        <Route path='/contacto' element={<Contacto/>}/>     */}
      {/* </Routes> */}
    </div>
  )
}

export default App
