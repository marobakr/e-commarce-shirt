import React from 'react'
import Slider from '../components/slider'
import Banner from '../components/small-banar'
import Trending from '../components/trending'
import Title from '../components/title'
import ShopLest from '../components/shop-lest'
import Blog from '../components/blog'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <Slider />
      <Banner />
      <Trending />
      <Title />
      <ShopLest />
      <Blog />
    </div>
  )
}

export default Home
