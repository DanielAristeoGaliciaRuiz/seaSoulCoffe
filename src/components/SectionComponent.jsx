import React from 'react'
import './styles/SectionComponent.css'
import AboutMenu from './AboutMenu'

const SectionComponent = ({data,video,mediaType}) => {


  return (
    <div className='generalContainer'>
      <div className="individualContainer" name={data.name}>
      <div className="videoContainer">
         { 
        mediaType === 'mp4'?<video className='video' src={video} type='video/mp4' muted autoPlay loop ></video>:<img className='video' src={video} type='jpg'></img>}
      </div>
      <div className="desktopMenu">
      </div>
      <div className="desktopViewInfoContainer">

        
         <div className="infoContainer">
        <p className='foodTitel'>{data.name}</p>
        <div className='textDescription'>
          <p>
          {data.text1}
          </p>
          <p>
          {data.text2}
          </p> 
        </div>
        {
          data.button ?  <button className='menuButton'>{data.button}</button>:''
        }
      </div>
      </div>
     
      </div>
    </div>
  )
}

export default SectionComponent