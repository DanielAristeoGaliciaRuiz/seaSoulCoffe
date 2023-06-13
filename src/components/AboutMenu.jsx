import React from 'react'
import './styles/AboutMenu.css'
import {Link} from 'react-scroll'

const AboutMenu = ({aboutData}) => {
  return (
    <div className='componentMenu'>
      <ul className='optionsList'>
      {aboutData.map(data=>(
        <Link key={data.id} to={data.name} smooth={true} duration={500}>
        <li className="optionListItem">
          {data.name}
        </li>
        </Link>
      ))
      }
      </ul>
    </div>
  )
}

export default AboutMenu