'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import { BestChild } from './data/navdata'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const BestSelling = () => {
  const Style = {
    position: 'absolute',
    padding: '20px 15px',
    backgroundColor: 'white',
    border: '1px solid #efe7e7b8',
    left: '100%',
    transform: 'translate(5px)',
    display: 'flex',
    borderLeft: '3px solid #f7941d',
    top: '0',
    gap: '25px',
    width: 'fit-content',
  }

  return (
    <div className='parent' style={Style}>
      {BestChild.map((boxes) => {
        const { id, titleBt, img, info_0, info_1, info_2, info_3 } = boxes
        return (
          <div className='box' key={id}>
            <button>{titleBt}</button>
            <div className='img'>
              <img src={img} alt='' />
            </div>
            <p>{info_0}</p>
            <p>{info_1}</p>
            <p>{info_2}</p>
            <p>{info_3}</p>
          </div>
        )
      })}
    </div>
  )
}

const NewArriveChild = () => {
  const Style = {
    position: 'absolute',
    left: '102%',
    padding: '10px',
    backgroundColor: 'white',
    borderLeft: ' 3px solid #f7941d',
    width: '80%',
  }
  return (
    <ul className='newarrive' style={Style}>
      <li>accessories</li>
      <li>best seling</li>
      <li>top 100 offer</li>
      <li>sunglass</li>
      <li>watch</li>
      <li>mans product</li>
      <li>ladies</li>
      <li>westrn</li>
      <li>demin</li>
    </ul>
  )
}

const ShopLinksChild = () => {
  return (
    <ul className='flow second_II'>
      <li>
        <Link href='cart'>cart</Link>
      </li>
      <li>
        <Link href='checkout'>checkout</Link>
      </li>
    </ul>
  )
}
const BlogLinksChild = () => {
  return (
    <ul className='flow'>
      <li>
        <Link href='/blog'> blog sigle sidebar</Link>
      </li>
    </ul>
  )
}
const Navbar = () => {
  // to angle bottom click
  const [show, setShow] = useState(false)
  // trager function to reset usesate
  const handleClick = () => setShow(!show)
  // show blog angle bottom
  const [showBlog, setShowBlog] = useState(false)
  // trager function to reset usesate
  const handleClickBlog = () => setShowBlog(!showBlog)
  // showNewArrive click to show your child
  const [showNewArrive, setShowNewArrive] = useState(false)
  // check if window.pageYoffset === 240 to hidden categoris
  const [scrollClass, setScrollClass] = useState('')
  // showBestCh click to show your child
  const [showBestCh, setShowBestCh] = useState(false)
  // when i open tow links bat in the same tim
  //  this is a bug
  useEffect(() => {
    if (show) {
      setShowBlog(false)
    } else if (showBlog) {
      setShow(false)
    }
  }, [show, showBlog])
  useEffect(() => {
    console.log(window.location.pathname)
    const handleScroll = () => {
      if (window.scrollY >= 240) {
        setScrollClass('hidden')
      } else if (
        window.location.pathname === '/blog' ||
        window.location.pathname === '/cart' ||
        window.location.pathname === '/checkout'
      ) {
        setScrollClass('pathname')
      } else {
        setScrollClass('show')
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={` ${scrollClass}`}>
      <div className='container'>
        <div className='alllinks'>
          <div className='categories'>
            <div>
              <MenuIcon />
            </div>
            <ul className={`categorieslinks  ${scrollClass}`}>
              <li onClick={() => setShowNewArrive(!showNewArrive)}>
                {showNewArrive && <NewArriveChild />}
                {'new arrive '}
                <i>
                  <ChevronRightSharpIcon />
                </i>
              </li>
              <li
                className='bestSellings'
                onClick={() => setShowBestCh(!showBestCh)}
              >
                {showBestCh && <BestSelling />}
                {'  best sellings'}
                <i>
                  <ChevronRightSharpIcon />
                </i>
              </li>
              <li>accesspries</li>
              <li>top 100 offer</li>
              <li>sunglass</li>
              <li>watch</li>
              <li>mans product</li>
              <li>ladies</li>
              <li>westrn</li>
              <li>denim</li>
            </ul>
            <h2>Categories</h2>
          </div>
          <div className='links'>
            <ul>
              <li>
                <Link href={'/'}>
                  <span>home</span>
                </Link>
              </li>
              <li>
                <Link href='#product'>
                  <span>product</span>
                </Link>
              </li>
              <li>
                <Link href={'#service'}>
                  <span>service</span>
                </Link>
              </li>
              <li className='shopNew'>
                <span onClick={handleClick}>
                  <p>shop</p> <ExpandMoreIcon />
                </span>
                {show && <ShopLinksChild />}
              </li>
              <li>
                <span>pages</span>
              </li>
              <li>
                <span onClick={handleClickBlog}>
                  <p>blog</p>
                  <ExpandMoreIcon />
                </span>
                {showBlog && <BlogLinksChild />}
              </li>
              <li className='contact_nav'>
                <Link href={'#footer'}>
                  <span>contact us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
