import React from 'react'
import { OurImage } from './data/banner'

const Banner = () => {
  const Style = {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translate(10px, -50%)',
  }
  return (
    <div className='samll-banner'>
      {OurImage.map((item) => {
        const { id, img, heading, title, info } = item
        return (
          <div key={id} className='img'>
            <img src={img} alt='' />
            <div style={Style} className='box'>
              <p>{heading}</p>
              <h2>{title}</h2>
              <p>{info}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Banner
