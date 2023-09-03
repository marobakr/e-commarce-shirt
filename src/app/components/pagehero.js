import React from 'react'
import Link from 'next/link'

const PageHero = ({ home, title }) => {
  return (
    <div>
      <div className='parent'>
        <div className='container'>
          <div className='child'>
            <Link className='frist_link' href='/'>
              Home
            </Link>
            <Link href='blog' className='last_link'>
              / {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHero
