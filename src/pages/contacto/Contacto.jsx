import React from 'react'
import AnimatedMenu from '../../components/AnimatedMenu'
import AboutMenu from '../../components/AboutMenu'
import SectionComponent from '../../components/SectionComponent'
import {contacto} from '../../utils/sectionsData'
import Header from '../../layout/Header'


const Contacto = () => {
  return (
    <div className='generalContainer'>
      <AnimatedMenu/>
      <Header data={contacto}/>
       <AboutMenu aboutData={contacto}/> 
      {
        contacto.map(data=><SectionComponent 
          key={data.id} 
          data={data} 
          video={data.media}
          mediaType={data.mediaType}/>)
      } 
    </div>
  )
}

export default Contacto