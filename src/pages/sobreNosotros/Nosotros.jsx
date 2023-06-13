import React from 'react'
import '../../App.css'
import AnimatedMenu from '../../components/AnimatedMenu'
import AboutMenu from '../../components/AboutMenu'
import SectionComponent from '../../components/SectionComponent'
import {aboutData} from '../../utils/sectionsData'
import Header from '../../layout/Header'

const Nosotros = () => {
  return (
    <div className='generalContainer'>
      <AnimatedMenu/>
      <Header data={aboutData}/>

      <AboutMenu aboutData={aboutData}/> 
      {
       aboutData.map(data=><SectionComponent 
         key={data.id} 
         data={data} 
         video={data.media}
         mediaType={data.mediaType}/>)
     } 
    </div>
  )
}

export default Nosotros