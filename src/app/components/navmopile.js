'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
const NavLinks = ({ setShowLinks, showLinks }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (showLinks) {
      setShowLinks(false)
    } else {
      setShowLinks(true)
    }
  }, [show])
  return (
    <React.Fragment>
      <MenuIcon onClick={() => setShow(!show)} />
    </React.Fragment>
  )
}

export default NavLinks
