/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BlogData } from './data/blog'
const index = () => {
  return (
    <div className='ourblog' id='blog'>
      <h2 className='main-title'>from our blog</h2>
      <div className='container'>
        {BlogData.map((box) => {
          const { id, img, date, title, info } = box
          return (
            <div className='box' key={id}>
              <div className='img'>
                <img src={img} alt='' />
              </div>
              <div className='info'>
                <p className='date'>{date}</p>
                <h3>{title}</h3>
                <p>{info}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default index
