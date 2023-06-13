import React from 'react'
import './Home.css'
import AnimatedMenu from '../../components/AnimatedMenu'
import seaSoulHome from '../../assets/videos/seaSoulHome.mp4'

const Home = () => {


  return (
    <section className='generalContainer'>
      <AnimatedMenu/>
      <div className="videoHomeContainer">

     <video className='homeVideo' src={seaSoulHome} type='video/mp4' muted autoPlay loop></video>
      </div>
    </section>
  )
}

export default Home