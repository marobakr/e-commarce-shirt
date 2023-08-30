import React from 'react'
import { Services } from './data/services'
const Service = () => {
  return (
    <div className='services' id='service'>
      <div className='container'>
        {Services.map((box) => {
          const { id, icon, title, inof } = box
          return (
            <div className='box' key={id}>
              <i className='rotate'> {icon}</i>
              <h4>{title}</h4>
              <p>Orders over $100</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Service
