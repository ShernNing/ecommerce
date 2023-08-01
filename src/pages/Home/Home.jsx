import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import SaleProducts from '../../components/SaleProducts/SaleProducts'
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured products"/>
      <Categories/>
      <SaleProducts type="sale products"/>
    </div>
  )
}

export default Home