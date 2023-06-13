import React from 'react'
import AnimatedMenu from '../../components/AnimatedMenu'
import AboutMenu from '../../components/AboutMenu'
import SectionComponent from '../../components/SectionComponent'
import {locaciones} from '../../utils/sectionsData'
import Header from '../../layout/Header'


const Locaciones = () => {
  return (
    <div className='generalContainer'>
      <AnimatedMenu/>
      <Header data={locaciones}/>
       <AboutMenu aboutData={locaciones}/>
      { 
        locaciones.map(data=><SectionComponent 
          key={data.id} 
          data={data} 
          video={data.media}
          mediaType={data.mediaType}/>)
      } 
    </div>
  )
}

export default Locaciones