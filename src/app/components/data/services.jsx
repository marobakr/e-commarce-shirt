import React from 'react'
import RocketIcon from '@mui/icons-material/Rocket'
import LockIcon from '@mui/icons-material/Lock'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import CachedIcon from '@mui/icons-material/Cached'
export const Services = [
  {
    id: 0,
    icon: <RocketIcon />,
    title: 'FREE SHIPING',
    info: ' Orders over $100',
  },
  {
    id: 1,
    icon: <CachedIcon />,
    title: 'FREE RETURN',
    info: ' Within 30 days returns',
  },
  {
    id: 2,
    icon: <LockIcon />,
    title: 'SUCURE PAYMENT',
    info: ' 100% secure payment',
  },
  {
    id: 3,
    icon: <BookmarksIcon />,
    title: 'BEST PEICE',
    info: ' Guaranteed price',
  },
]
