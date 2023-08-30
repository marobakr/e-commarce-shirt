'use client'
import React, { useState, useEffect } from 'react'
import { ShopDataCart } from '../components/data/cart'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
const PigCartSection = () => {
  const [xValue, setXValue] = useState()
  const [card, removeCard] = useState(ShopDataCart)
  const removeItem = (index) => {
    console.log(index)
    removeCard((item) => {
      let newCard = item.filter((card) => card.id !== index)

      return newCard
    })
  }

  const handleVaues = () => {
    let arr = []
    card.map((v) => {
      arr.push({ id: v.id, value: v.num })
    })
    setXValue(arr)
  }

  useEffect(() => {
    if (!xValue) {
      handleVaues()
    }
  }, [xValue])
  return (
    <div className='shop_cart_section'>
      <div className='container'>
        <div className='overFlow'>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>PRODUCT</th>
                <th>unit price</th>
                <th>quantity</th>
                <th>total</th>
                <th>eyption pondes</th>
                <th>
                  <DeleteIcon />
                </th>
              </tr>
            </thead>
            <tbody>
              {xValue &&
                card.map((boxcard) => {
                  const { img, label, info, price, icon, id } = boxcard
                  const xrr = xValue.filter((v) => v.id === id)
                  const vx = xrr[0].value
                  return (
                    <tr key={id}>
                      <td>
                        <img src={img} alt='' />
                      </td>
                      <td>
                        <p>
                          {label}
                          {info}
                        </p>
                      </td>
                      <td>
                        <p className='price_table'>{price}</p>
                      </td>
                      <td className='calculation'>
                        <button
                          onClick={() => {
                            // MP()
                            const f = xValue.filter((v) => v.id !== id)
                            if (vx >= 1) {
                              const o = Object.assign({ id, value: vx - 1 })
                              setXValue([...f, o])
                            }
                          }}
                        >
                          <RemoveIcon />
                        </button>
                        <p>{vx}</p>
                        <button
                          key={id}
                          onClick={() => {
                            const f = xValue.filter((v) => v.id !== id)
                            const o = Object.assign({ id, value: vx + 1 })
                            setXValue([...f, o])
                          }}
                        >
                          <AddIcon />
                        </button>
                      </td>
                      <td>
                        <p className='total_price'>$ {price * vx}</p>
                      </td>
                      <td>
                        <p>: eyption pondes = {price * vx * 15} </p>
                      </td>
                      <td>
                        <div onClick={() => removeItem(id)} className='icons'>
                          {icon}
                        </div>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>

        <div className='col_2_card'>
          <div className='form'>
            <div className='row_card'>
              <input type='text' placeholder='enter your coupon' />
              <button>applay</button>
            </div>
            <div className='checkcard'>
              <input type='checkbox' />
              <p>Shipping (+10$)</p>
            </div>
          </div>
          <div className='right_div'>
            <div className='total'>
              <p>cart subtotal</p>
              <p>$330.00</p>
            </div>
            <div className='total'>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className='total last_totla'>
              <p>you save </p>
              <p>$20.00</p>
            </div>
            <div className='result_fainal'>
              <button>Checkout</button>
              <button>Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PigCartSection
