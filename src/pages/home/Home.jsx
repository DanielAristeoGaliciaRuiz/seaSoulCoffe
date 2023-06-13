import React from 'react'
import './Home.css'
import AnimatedMenu from '../../components/AnimatedMenu'
import soul from '../../assets/videos/soul.mp4'
import {motion} from 'framer-motion'

const Home = () => {


  return (
    <motion.section className='generalContainer'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <AnimatedMenu/>
      <div className="videoHomeContainer">

     <video className='homeVideo' src={soul} type='video/mp4' muted autoPlay loop></video>
      </div>
    </motion.section>
  )
}

export default Home