import React from 'react'
import '../../App.css'
import AnimatedMenu from '../../components/AnimatedMenu'
import AboutMenu from '../../components/AboutMenu'
import SectionComponent from '../../components/SectionComponent'
import {aboutData} from '../../utils/sectionsData'
import Header from '../../layout/Header.jsx'
import {easeInOut, motion} from 'framer-motion'

const Nosotros = () => {
  return (
    <motion.div className='generalContainer'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0 }}>
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
    </motion.div>
  )
}

export default Nosotros