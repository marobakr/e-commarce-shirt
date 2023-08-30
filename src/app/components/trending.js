'use client'
import React, { useState } from 'react'
import { Tranding } from './data/tranding.jsx'

const Trending = () => {
  const [state, setstate] = useState(false)
  const [person, removePeorson] = useState(Tranding)
  return (
    <div className='tranding-items' id='product'>
      <h2 className='main-title'>Trending Item</h2>
      <div className='links'>
        <button>woman</button>
        <button>kids</button>
        <button>accessories</button>
        <button>essential</button>
        <button>prices</button>
      </div>
      <div className='container'>
        {Tranding.map((box) => {
          const {
            id,
            img,
            title,
            icon_0,
            icon_1,
            icon_2,
            title_2,
            price,
            linkIcnos,
          } = box
          return (
            <div key={id} className='item'>
              <div className='img'>
                <img src={img} alt='dafult imge' />
                <div className='box'>
                  <div className='title'>{title}</div>
                  <div className='icnos'>
                    <i>
                      {icon_0}
                      <a className='link I-icnos'>{linkIcnos}</a>
                    </i>
                    <i>
                      {icon_1}
                      <a className='link I-icnos'>{linkIcnos}</a>
                    </i>
                    <i>
                      {icon_2}
                      <a className='link I-icnos'>{linkIcnos}</a>
                    </i>
                  </div>
                </div>
              </div>
              <div className='info'>
                <div className='title'>{title_2}</div>
                <div className='price'>$ {price}.00</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trending
