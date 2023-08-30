'use client'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import Instagram from '@mui/icons-material/Instagram'
import SchoolIcon from '@mui/icons-material/School'

// import { FaFreeCodeCamp } from 'react-icons/fa'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='container'>
        <div className='box'>
          <div className='img'>
            <img src='./images/logo2.png' alt='' />
          </div>
          <p>
            Praesent dapibus, neque id cursus ucibus, tortor neque egestas
            augue, magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
            tincidunt quis, accumsan porttitor, facilisis luctus, metus
          </p>
          <div className='number'>
            <p>Got Question? Call us 24/7</p>
            <span>+01278746444</span>
          </div>
        </div>
        <div className='box animation'>
          <h4>Information</h4>
          <p>About Us</p>
          <p>Faq</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
          <p>Help</p>
        </div>
        <div className='box animation'>
          <h4>Customer Service</h4>
          <p>Payment Methods</p>
          <p>Money-back</p>
          <p>Returns</p>
          <p>Shipping</p>
          <p>Privacy Policy</p>
        </div>
        <div className='box animation'>
          <h4>Get In Tuch</h4>
          <p>NO. 342 - London Oxford Street.</p>
          <p>012 United Kingdom.</p>
          <p style={{ cursor: 'pointer', textTransform: 'lowercase' }}>
            <Link href='https://marobakr.com'>marobakr.com</Link>
          </p>
          <p>+01551783366</p>
          <div className='icons'>
            <i>
              <FacebookIcon />
            </i>
            <i>
              <TwitterIcon />
            </i>
            <i>
              <Instagram />
            </i>
            <i>
              <SchoolIcon />
            </i>
            <i>
              <WorkOutlineIcon />
            </i>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <div className='card'>
            <p>
              Copyright&copy;
              <i>
                <FavoriteSharpIcon />
              </i>
              2032 Marwan Abubakr - All Rights Reserved.
            </p>
            <img src='./images/payments (1).png' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
