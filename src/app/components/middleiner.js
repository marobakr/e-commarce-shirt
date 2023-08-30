'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp'

import NavMopile from './navmopile'
import Logo from '../../images/logo.png'

const ItemLinks = () => {
  const [showShop, hiddinShop] = useState(false)
  const [showBlog, hiddinBlog] = useState(false)

  const ShowNavShop = () => {
    return (
      <ul>
        <li>
          <Link href='/cart'>cart</Link>
        </li>
        <li>
          <Link href='/checkout'>checkout</Link>
        </li>
      </ul>
    )
  }
  const ShowNavBLog = () => {
    return (
      <ul>
        <li>
          <Link href='/blog'>Blog Sigle Sidebar</Link>
        </li>
      </ul>
    )
  }
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>home</Link>
        </li>
        <li>
          <Link href='#product'>product</Link>
        </li>
        <li>
          <Link href='#service'>service</Link>
        </li>
        <li className='shop'>
          <Link href='/' onClick={() => hiddinShop(!showShop)} className='shop'>
            <div className='parent-li'>
              <div>shop</div>
              <i className={`angle ${showShop ? 'angleactive' : false}`}>
                <ChevronRightSharpIcon />
              </i>
            </div>
          </Link>
          {showShop && <ShowNavShop />}
        </li>
        <li>
          <Link href='/'>pages</Link>
        </li>
        <li className='blog'>
          <Link href='/' onClick={() => hiddinBlog(!showBlog)} className='blog'>
            <div className='parent-li'>
              <div>blog</div>
              <i className={`angle ${showBlog ? 'angleactive' : false}`}>
                <ChevronRightSharpIcon />
              </i>
            </div>
          </Link>
          {showBlog && <ShowNavBLog />}
        </li>
        <li>
          <Link href='#footer'>contactus</Link>
        </li>
      </ul>
    </nav>
  )
}

const NavLinks = () => {
  const [showLinks, setShowLinks] = useState(true)

  // animation nav fixed position
  const refContainer = useRef(null)
  // ! هنا في ايرور محتاج يتصلح
  // window.addEventListener('scroll', function () {
  //   let scrollPosition = window.pageYOffset
  //   if (scrollPosition >= 240) {
  //     refContainer.current.style = [
  //       `
  //       position: fixed;
  //       width: 100%;
  //       z-index: 9;
  //       top: 0;
  //       box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
  //       transform :translateY(100px);
  //       top:-100px;
  //       background-color: #ffffffa3;
  //       color: #333;
  //          `,
  //     ]
  //   } else {
  //     refContainer.current.style = [
  //       `
  //       position: relative;
  //          `,
  //     ]
  //   }
  // })
  return (
    <div className='middle-inner'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            <Image src={Logo} alt='' />
          </Link>
        </div>
        <div className='form'>
          <div className='menu'>
            <span> all catgory</span>
            <ul className='megamenu'>
              <li>all catgory</li>
              <li>watch</li>
              <li>mobile</li>
              <li>kids item</li>
            </ul>
          </div>
          <div className='search'>
            <input type='search' placeholder='search products heare ... ' />
            <button>
              <i>
                <SearchSharpIcon />
              </i>
            </button>
          </div>
        </div>
        <div className='icons'>
          <i>
            <PersonIcon />
          </i>
          <i>
            <FavoriteSharpIcon />
          </i>
          <i className='backpack'>
            {/* //! مواقتا  */}
            {/* <FormBox /> */}
            <LocalGroceryStoreSharpIcon />
          </i>
        </div>
        {/* state bars in media mopile  */}
      </div>
      <div ref={refContainer} className='state-bars'>
        <div className='stateBarsIcons'>
          <Link href='/'>
            <Image src={Logo} alt='' />
          </Link>
          <div className='parent_links'>
            <NavMopile
              setShowLinks={(s) => {
                setShowLinks(s)
              }}
              showLinks={showLinks}
            />
          </div>
        </div>
        {showLinks && <ItemLinks />}
      </div>
    </div>
  )
}

export default NavLinks
