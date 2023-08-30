'use client'
import React from 'react'
import { useState } from 'react'
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp'
import { Data } from './dataOfBox'

const FormBox = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <LocalGroceryStoreSharpIcon onClick={() => setShow(!show)} />
      {show && <Boxorder />}
    </div>
  )
}
const Boxorder = () => {
  const [card, removeCard] = useState(Data)
  const removeItem = (index) => {
    console.log(index)
    removeCard((item) => {
      let newCard = item.filter((card) => card.id !== index)

      return newCard
    })
  }
  return (
    <div className='box-card-relative'>
      <div className='card'>
        <div className='title'>
          <p>
            <span className='leangth-items'>{card.length}</span> items
          </p>
          <p>view cart</p>
        </div>
        {card.map((box) => {
          const { id, heading, price, img } = box
          return (
            <div className='box I' key={id}>
              <div className='info'>
                <p className='label'>{heading}</p>
                <p className='price price-box'>$ {price}</p>

                <button onClick={() => removeItem(id)} className='button-I'>
                  x
                </button>
              </div>
              <div className='img'>
                <img src={img} alt='' />
              </div>
            </div>
          )
        })}
        <div className='footer-box'>
          <button>checkout</button>
        </div>
      </div>
    </div>
  )
}
export default FormBox
