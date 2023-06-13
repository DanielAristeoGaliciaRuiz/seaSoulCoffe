import React from 'react'
import AnimatedMenu from '../../components/AnimatedMenu'
import AboutMenu from '../../components/AboutMenu'
import SectionComponent from '../../components/SectionComponent'
import {variedades} from '../../utils/sectionsData'
import Header from '../../layout/Header.jsx'
import {motion} from 'framer-motion'


const Variedades = () => {
  return (
    <motion.div className='generalContainer'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
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
    </motion.div>
  )
}

export default Variedades