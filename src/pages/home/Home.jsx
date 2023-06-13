import React from 'react'
import './Home.css'
import AnimatedMenu from '../../components/AnimatedMenu'
import AboutMenu from '../../components/AboutMenu'
import {aboutData,contacto,locaciones,variedades} from '../../utils/sectionsData'

import SectionComponent from '../../components/SectionComponent'


const Home = () => {


  return (
    <section className='generalContainer'>
      {/* <AnimatedMenu/> */}
      
       {/* <AboutMenu aboutData={aboutData}/> 
       {
        aboutData.map(data=><SectionComponent 
          key={data.id} 
          data={data} 
          video={data.media}
          mediaType={data.mediaType}/>)
      }  */}


      {/* <AboutMenu aboutData={contacto}/> 
      {
        contacto.map(data=><SectionComponent 
          key={data.id} 
          data={data} 
          video={data.media}
          mediaType={data.mediaType}/>)
      } */}


      {/* <AboutMenu aboutData={variedades}/>
      {
        variedades.map(data=><SectionComponent 
          key={data.id} 
          data={data} 
          video={data.media}
          mediaType={data.mediaType}/>)
      } */}


{/* <AboutMenu aboutData={locaciones}/>
      { 
        locaciones.map(data=><SectionComponent 
          key={data.id} 
          data={data} 
          video={data.media}
          mediaType={data.mediaType}/>)
      } */}

    </section>
  )
}

export default Home