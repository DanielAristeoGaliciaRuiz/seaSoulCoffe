import React from 'react'
import AnimatedMenu from '../../components/AnimatedMenu'
import AboutMenu from '../../components/AboutMenu'
import SectionComponent from '../../components/SectionComponent'
import {variedades} from '../../utils/sectionsData'
import Header from '../../layout/hEADER.JSX'


const Variedades = () => {
  return (
    <div className='generalContainer'>
      <AnimatedMenu/>
      <Header data={variedades}/>
        <AboutMenu aboutData={variedades}/>
      {
        variedades.map(data=><SectionComponent 
          key={data.id} 
          data={data} 
          video={data.media}
          mediaType={data.mediaType}/>)
      } 
    </div>
  )
}

export default Variedades