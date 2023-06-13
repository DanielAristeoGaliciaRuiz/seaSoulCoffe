import React, { useState } from 'react'
import "./styles/Header.css";
import { Link } from 'react-scroll';

const options=[
 {
   id:'Alimentos',
    name:'Alimentos'
 },
 {
  id:'Instalaciones',
   name:'Instalaciones'
},
{
  id:'Esencia',
   name:'Esencia'
},
{
  id:'Cafe',
   name:'Producto'
}
]

const Header = ({data}) => {

  const [navbar, setNavbar] = useState(false)
  const [sectionName, setSectionName] = useState('')
  const [toggle, setToggle] = useState(false)

  const toggleMenu=()=>{
    setToggle(!toggle)
  }

  const showNavbar = ()=>{
    if(window.scrollY>=40){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  

  window.addEventListener('scroll',showNavbar)


  return (
    <div className={navbar? "headerContainer activeNavbar": "headerContainer"}>

      <div className={navbar?"mainTittle activeColor": "mainTittle"}>
      {sectionName}</div>

      <div 
      className={navbar?"optionsContainer activeColor": "optionsContainer"} onClick={toggleMenu}>{sectionName? sectionName: data[0].name} <i className='bx bx-chevron-down'></i>
      
      <ul className={toggle?"menuNavbar":"menuNavbar toogle"}>
      
      {
        data.map(data=>(
        <Link key={data.id} to={data.name} smooth={true} duration={500}>
      <li className='menuItem' onClick={()=>{
        setSectionName(data.name)
        setToggle(!toggle)
      } } >
        {data.name}
      </li>
        </Link>
        ))
      }        
      </ul>
      </div>
      
    </div>
  );
};

export default Header